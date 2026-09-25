#!/usr/bin/env node
// FILE: install-desktop-mac.ts
// Purpose: Build the Apple Silicon desktop app bundle and replace /Applications/Synara.app without a DMG.
// Layer: Local macOS installation helper

import { spawnSync } from "node:child_process";
import { constants } from "node:fs";
import { accessSync, existsSync, mkdtempSync, renameSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const appName = "Synara.app";
const applicationsDirectory = "/Applications";
const installedAppPath = join(applicationsDirectory, appName);
const repoRoot = fileURLToPath(new URL("..", import.meta.url));

function run(command: string, args: string[], cwd = repoRoot) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(
      `${command} failed${result.status === null ? "" : ` with exit code ${result.status}`}.`,
    );
  }
}

function ensureAppIsClosed() {
  const result = spawnSync("pgrep", ["-x", "Synara"], { encoding: "utf8" });
  if (result.error) throw result.error;
  if (result.status === 0) {
    throw new Error("Quit Synara completely, then run this command again.");
  }
  if (result.status !== 1) {
    throw new Error("Could not check whether Synara is running.");
  }
}

function ensureBunIsAvailable() {
  const result = spawnSync("bun", ["--version"], { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    throw new Error(
      "Bun 1.4.2 is required to build Synara; install the version listed in .mise.toml.",
    );
  }
}

function installApp(sourceAppPath: string) {
  const newAppPath = join(applicationsDirectory, `.Synara.app.installing-${process.pid}`);
  const backupAppPath = join(applicationsDirectory, `.Synara.app.previous-${process.pid}`);
  let movedPreviousApp = false;

  accessSync(applicationsDirectory, constants.W_OK);
  if (existsSync(newAppPath) || existsSync(backupAppPath)) {
    throw new Error("A temporary Synara install path already exists; remove it before retrying.");
  }

  try {
    run("ditto", ["--rsrc", "--extattr", sourceAppPath, newAppPath]);
    if (existsSync(installedAppPath)) {
      renameSync(installedAppPath, backupAppPath);
      movedPreviousApp = true;
    }
    renameSync(newAppPath, installedAppPath);
  } catch (error) {
    if (movedPreviousApp && !existsSync(installedAppPath) && existsSync(backupAppPath)) {
      renameSync(backupAppPath, installedAppPath);
    }
    throw error;
  } finally {
    if (existsSync(newAppPath)) rmSync(newAppPath, { recursive: true, force: true });
  }

  if (movedPreviousApp) {
    try {
      rmSync(backupAppPath, { recursive: true, force: true });
    } catch {
      process.stderr.write(`Previous app backup remains at ${backupAppPath}\n`);
    }
  }
}

if (process.platform !== "darwin" || process.arch !== "arm64") {
  process.stderr.write(
    "This command installs the Apple Silicon macOS build and must run on an arm64 Mac.\n",
  );
  process.exit(1);
}

try {
  ensureBunIsAvailable();
  ensureAppIsClosed();
  const tempRoot = mkdtempSync(join(tmpdir(), "synara-local-install-"));
  try {
    const outputDirectory = join(tempRoot, "output");
    const buildScript = fileURLToPath(new URL("./build-desktop-artifact.ts", import.meta.url));
    run(process.execPath, [
      buildScript,
      "--platform",
      "mac",
      "--target",
      "dir",
      "--arch",
      "arm64",
      "--output-dir",
      outputDirectory,
    ]);

    const builtAppPath = join(outputDirectory, appName);
    if (!existsSync(join(builtAppPath, "Contents", "Info.plist"))) {
      throw new Error(`The packaged app bundle was not found at ${builtAppPath}.`);
    }

    installApp(builtAppPath);
    process.stdout.write(`Installed ${installedAppPath}\n`);
    process.stdout.write(
      "Open Synara from Applications. macOS may ask you to grant computer-use permissions again.\n",
    );
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
}
