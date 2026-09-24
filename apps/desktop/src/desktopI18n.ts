// FILE: desktopI18n.ts
// Purpose: Main-process translations for native menus and dialogs. English source strings are
//          the keys, so an untranslated string falls back to English.
// Layer: Desktop i18n
// Exports: DesktopLocale helpers and t() for the main process

import type { DesktopLocale } from "@synara/contracts";

export const DEFAULT_DESKTOP_LOCALE: DesktopLocale = "en";

export function isDesktopLocale(value: unknown): value is DesktopLocale {
  return value === "en" || value === "pt-BR";
}

export function normalizeDesktopLocale(value: unknown): DesktopLocale {
  return isDesktopLocale(value) ? value : DEFAULT_DESKTOP_LOCALE;
}

const ptBR: Readonly<Record<string, string>> = {
  // ── Application menu ───────────────────────────────────────────────────────
  "Check for Updates...": "Verificar atualizações...",
  "Settings...": "Configurações...",
  File: "Arquivo",
  View: "Visualizar",
  "New Terminal Tab": "Nova aba de terminal",
  "Toggle Sidebar": "Alternar barra lateral",
  "Toggle Browser": "Alternar navegador",
  "Keyboard Shortcuts": "Atalhos de teclado",
  "Reset Zoom": "Redefinir zoom",
  "Zoom In": "Aumentar zoom",
  "Zoom Out": "Diminuir zoom",

  // ── Update dialogs ─────────────────────────────────────────────────────────
  "Updates unavailable": "Atualizações indisponíveis",
  "Automatic updates are not available right now.":
    "Atualizações automáticas não estão disponíveis no momento.",
  "You're up to date!": "Você está atualizado!",
  "Synara {version} is currently the newest version available.":
    "O Synara {version} é a versão mais recente disponível no momento.",
  "Update found": "Atualização encontrada",
  "Synara is preparing the update in the background.":
    "O Synara está preparando a atualização em segundo plano.",
  "Update ready": "Atualização pronta",
  "Click Update in the sidebar when you’re ready to restart and install it.":
    "Clique em Atualizar na barra lateral quando quiser reiniciar e instalar.",
  "Update check failed": "Falha ao verificar atualizações",
  "Could not check for updates.": "Não foi possível verificar atualizações.",
  "An unknown error occurred. Please try again later.":
    "Ocorreu um erro desconhecido. Tente novamente mais tarde.",
  "Synara failed to start": "O Synara não conseguiu iniciar",
  "Stage: {stage}\n{message}{detail}": "Etapa: {stage}\n{message}{detail}",
  OK: "OK",

  // ── Backend / renderer failure dialogs ─────────────────────────────────────
  "Synara's backend didn't start": "O backend do Synara não iniciou",
  "Synara's backend failed to start {count} times in a row.":
    "O backend do Synara falhou ao iniciar {count} vezes seguidas.",
  "Try again": "Tentar novamente",
  "Open logs": "Abrir logs",
  Quit: "Sair",
  "Synara's window crashed {count} times in a row.":
    "A janela do Synara travou {count} vezes seguidas.",
  "Synara's window stopped unexpectedly.": "A janela do Synara parou inesperadamente.",
  "The window's renderer process exited ({reason}).":
    "O processo de renderização da janela foi encerrado ({reason}).",
  "Synara paused automatic reloads so a repeating crash can't keep reloading in the background.":
    "O Synara pausou as recargas automáticas para que uma falha repetida não continue recarregando em segundo plano.",
  "This exit reason repeats on reload, so Synara did not retry automatically.":
    "Este motivo de encerramento se repete ao recarregar, então o Synara não tentou novamente de forma automática.",
  "Log file:\n{path}": "Arquivo de log:\n{path}",
  "Synara's window stopped": "A janela do Synara parou",
  Reload: "Recarregar",

  // ── Bundle swap dialogs ────────────────────────────────────────────────────
  "Synara needs to restart": "O Synara precisa reiniciar",
  "Synara changed while it was opening.": "O Synara mudou enquanto abria.",
  "The current process cannot safely read the replaced application bundle. Restart Synara to finish opening with one consistent version.":
    "O processo atual não consegue ler com segurança o pacote do aplicativo substituído. Reinicie o Synara para concluir a abertura com uma única versão consistente.",
  "Restart Synara": "Reiniciar o Synara",
  "Synara was replaced on disk": "O Synara foi substituído no disco",
  "The installed Synara app changed while it was running.":
    "O aplicativo Synara instalado mudou enquanto estava em execução.",
  "The interface keeps running from a safeguarded copy, but parts of the app loaded later can still read the replaced file. Restart now to pick up the new version safely.":
    "A interface continua rodando a partir de uma cópia protegida, mas partes do app carregadas depois ainda podem ler o arquivo substituído. Reinicie agora para adotar a nova versão com segurança.",
  "Restart Now": "Reiniciar agora",
  Later: "Mais tarde",

  // ── Database lifecycle dialogs ─────────────────────────────────────────────
  "Synara needs to recover its database": "O Synara precisa recuperar seu banco de dados",
  "A database migration did not finish safely.":
    "Uma migração do banco de dados não foi concluída com segurança.",
  "Restart Synara to open the verified backup recovery flow. Provider and chat processes will remain stopped until recovery completes.":
    "Reinicie o Synara para abrir o fluxo de recuperação do backup verificado. Os processos de provedores e conversas permanecerão parados até a recuperação terminar.",
  "Restart and recover": "Reiniciar e recuperar",
  "Synara is already running elsewhere": "O Synara já está em execução em outro lugar",
  "Your local Synara data is in use by another process.":
    "Seus dados locais do Synara estão em uso por outro processo.",
  "Another Synara server is already using this database.":
    "Outro servidor Synara já está usando este banco de dados.",
  "Another Synara server (process {pid}) is already using this database.":
    "Outro servidor Synara (processo {pid}) já está usando este banco de dados.",
  "Stop the other Synara app or development server, then try again. Your data has not been changed.":
    "Encerre o outro app Synara ou servidor de desenvolvimento e tente novamente. Seus dados não foram alterados.",

  // ── Migration recovery choices ─────────────────────────────────────────────
  "Update Synara and restart": "Atualizar o Synara e reiniciar",
  "Download latest release": "Baixar a versão mais recente",
  "Back up and continue": "Fazer backup e continuar",
  "Restore backup and restart": "Restaurar o backup e reiniciar",
  "Try restore again": "Tentar restaurar novamente",
  Copy: "Copiar",
  "Copy Image": "Copiar imagem",
  Cut: "Recortar",
  "Database migration {migration} is newer than this build supports ({supported}).":
    "A migração {migration} do banco de dados é mais recente do que esta versão aceita ({supported}).",
  "Database restore failed": "Falha ao restaurar o banco de dados",
  "Expected {expected}, but the desktop bundle contains {actual}.\n\nRebuild with {command} before starting Synara. The database was not opened.":
    "Era esperado {expected}, mas o pacote do desktop contém {actual}.\n\nCompile novamente com {command} antes de iniciar o Synara. O banco de dados não foi aberto.",
  "Migration recovery failed": "Falha na recuperação da migração",
  "Migration {migration} does not match this build.":
    "A migração {migration} não corresponde a esta versão.",
  "No completed migration backup record exists for this database, so Synara cannot choose a backup safely.":
    "Não há um registro de backup de migração concluída para este banco de dados. Por isso, o Synara não pode escolher um backup com segurança.",
  "No suggestions": "Nenhuma sugestão",
  Paste: "Colar",
  "Rebuild with {command} before starting Synara again. The database was not opened.":
    "Compile novamente com {command} antes de iniciar o Synara. O banco de dados não foi aberto.",
  "Select All": "Selecionar tudo",
  "Sign in": "Entrar",
  "Synara could not update itself": "O Synara não conseguiu se atualizar",
  "Synara could not verify its server build":
    "O Synara não conseguiu verificar a versão do servidor",
  "Synara could not verify migration recovery":
    "O Synara não conseguiu verificar a recuperação da migração",
  "Synara found a different database migration history":
    "O Synara encontrou um histórico diferente de migrações do banco de dados",
  "Synara stopped a database migration before it could finish safely.":
    "O Synara interrompeu uma migração do banco de dados antes que ela pudesse ser concluída com segurança.",
  "Synara verified the exact pre-migration backup at:\n{path}\n\nIts tracker ends at migration {migration}; its shared lineage is compatible with this build, and it passed SQLite integrity checking.":
    "O Synara verificou o backup exato anterior à migração em:\n{path}\n\nO registro de migrações termina na migração {migration}; a linhagem compartilhada é compatível com esta versão, e o backup passou pela verificação de integridade do SQLite.",
  "Synara will keep the backend and provider processes stopped. The recovery record is not trusted, so restoring from it is disabled; choose one of the safe actions below.":
    "O Synara manterá o backend e os processos dos provedores parados. O registro de recuperação não é confiável, então a restauração por ele está desativada. Escolha uma das ações seguras abaixo.",
  "Synara's server build does not match": "A versão do servidor do Synara não corresponde",
  "Synara's server build is stale": "A versão do servidor do Synara está desatualizada",
  "The backend and provider processes will remain stopped until you update, restore, or quit.":
    "O backend e os processos dos provedores continuarão parados até você atualizar, restaurar o backup ou sair.",
  "The backend stopped for database safety, but its recovery details were invalid.":
    "O backend foi interrompido para proteger o banco de dados, mas os detalhes de recuperação são inválidos.",
  "The built migration code does not match this checkout.":
    "O código de migração compilado não corresponde a este checkout.",
  "The completed migration backup record does not describe this exact database state.":
    "O registro do backup de migração concluída não descreve exatamente o estado deste banco de dados.",
  'The database records "{recorded}", while this build expects "{expected}". Continuing will first save an exact backup in:\n{directory}\n\nSynara will then rewrite tracker rows from migration {firstMigration} and replay through {targetVersion}. Older builds may no longer be able to open the upgraded database. No provider or chat process will start until you choose.':
    'O banco de dados registra "{recorded}", enquanto esta versão espera "{expected}". Ao continuar, primeiro será salvo um backup exato em:\n{directory}\n\nDepois, o Synara reescreverá as linhas de controle a partir da migração {firstMigration} e reaplicará as migrações até {targetVersion}. Versões antigas talvez não consigam mais abrir o banco atualizado. Nenhum processo de provedor ou conversa será iniciado até você escolher.',
  "The desktop and server migration code came from different builds.":
    "O código de migração do desktop e do servidor veio de compilações diferentes.",
  "The exact recorded backup has a schema or migration lineage this Synara build cannot open safely.":
    "O backup exato registrado tem um esquema ou uma linhagem de migração que esta versão do Synara não pode abrir com segurança.",
  "The exact recorded backup is missing, unreadable, or failed SQLite integrity checking.":
    "O backup exato registrado está ausente, ilegível ou não passou pela verificação de integridade do SQLite.",
  "The migration source could not be checked safely.":
    "Não foi possível verificar o código-fonte da migração com segurança.",
  "The newest Synara release could not be installed.":
    "Não foi possível instalar a versão mais recente do Synara.",
  "The recorded backup does not match this desktop database exactly, so Synara will not restore it.":
    "O backup registrado não corresponde exatamente a este banco de dados do desktop, então o Synara não o restaurará.",
  "The saved database backup could not be restored.":
    "Não foi possível restaurar o backup salvo do banco de dados.",
  "The verified database backup could not be restored.":
    "Não foi possível restaurar o backup verificado do banco de dados.",
  "This database is newer than Synara": "Este banco de dados é mais recente que o Synara",
  "Update or reinstall Synara before starting it again. The database was not opened.":
    "Atualize ou reinstale o Synara antes de iniciá-lo novamente. O banco de dados não foi aberto.",
  "You can {options}.": "Você pode {options}.",
  "install the newest Synara release, which may already contain the fix":
    "instalar a versão mais recente do Synara, que talvez já inclua a correção",
  "quit without opening the database": "sair sem abrir o banco de dados",
  "restore the verified pre-migration backup and restart":
    "restaurar o backup verificado anterior à migração e reiniciar",
  "retry the verified backup restore": "tentar restaurar novamente o backup verificado",
  "{error}\n\nRebuild with {command} before starting Synara. The database was not opened.":
    "{error}\n\nCompile novamente com {command} antes de iniciar o Synara. O banco de dados não foi aberto.",
  "{failure}{choice} No provider or chat process will start until recovery succeeds.":
    "{failure}{choice} Nenhum processo de provedor ou conversa será iniciado até que a recuperação seja concluída.",
  "{options} or {last}": "{options} ou {last}",

  // ── Confirm dialog ─────────────────────────────────────────────────────────
  No: "Não",
  Yes: "Sim",
};

const CATALOGS: Partial<Record<DesktopLocale, Readonly<Record<string, string>>>> = {
  "pt-BR": ptBR,
};

let currentLocale: DesktopLocale = DEFAULT_DESKTOP_LOCALE;

export function getDesktopLocale(): DesktopLocale {
  return currentLocale;
}

export function setDesktopLocale(locale: unknown): DesktopLocale {
  currentLocale = normalizeDesktopLocale(locale);
  return currentLocale;
}

/** Translate a native-surface string. English source strings are the keys. */
export function t(key: string, params?: Record<string, string | number>): string {
  const catalog = CATALOGS[currentLocale];
  const template = catalog?.[key] ?? key;
  if (!params) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match,
  );
}
