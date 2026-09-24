# Web i18n

English source strings are the keys. A catalog maps the English text to a translation, so a
string without an entry falls back to English instead of breaking the UI.

```tsx
import { useT } from "~/i18n";

function Example() {
  const t = useT();
  return <span>{t("Settings")}</span>;
}
```

## Rules

1. Call `t()` during render or inside an event handler. Never at module scope: that freezes the
   language at import time.
2. Never change the English string to "fix" a key. If upstream renames a string, the old catalog
   entry becomes orphaned and the new string falls back to English until translated.
3. Keep deep-link anchors stable: `SettingsRow` accepts `anchorTitle` with the English source
   title when `title` is already translated. Anchors feed `?target=setting-…` and the settings
   search index, so they must not follow the language.
4. Add the translation to the matching `catalog/pt-BR.<area>.ts` fragment. Put shared,
   general-purpose strings in `catalog/pt-BR.ts`; `catalog/index.ts` combines the fragments.
   Interpolation uses `{name}`; plural forms use `key_one` / `key_other` selected by
   `Intl.PluralRules`.
5. Dynamic labels (nav items, option arrays) are translated at the render site with
   `t(item.label)`; the English strings stay in the source data files.

## Adding a language

1. Add the locale to `AppLocale` in `locale.ts` and a native label to `APP_LOCALE_OPTIONS`.
2. Add the locale catalog (split into area fragments when appropriate) and register it in
   `catalog/index.ts`.
3. The Settings > Appearance > Language picker, persistence, and `<html lang>` update follow
   automatically.

## Coverage report

`bun run i18n:status` lists keys used with a literal that have no translation and catalog
entries no longer referenced. `--strict` exits non-zero when translations are missing.
Brand names such as `AppSnap` intentionally stay untranslated and show up as missing.

## Desktop

`apps/desktop/src/desktopI18n.ts` is the main-process catalog for native menus and dialogs. The
renderer mirrors its language through `desktopBridge.setLocale`, and the main process persists it
(`STATE_DIR/desktop-locale.json`) so startup dialogs match before the renderer connects.
