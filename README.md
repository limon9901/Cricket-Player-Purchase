
<img width="1906" height="863" alt="Screenshot_6" src="https://github.com/user-attachments/assets/cac3b8a4-7037-4039-ab82-eef9d7b3b841" />
<img width="1903" height="847" alt="Screenshot_5" src="https://github.com/user-attachments/assets/84708ac0-8a10-4e33-99bf-c4efac7afc98" />
<img width="1906" height="857" alt="Screenshot_4" src="https://github.com/user-attachments/assets/c8cd83c3-384b-4e15-af48-ed1ad4e48838" />
<img width="1919" height="864" alt="Screenshot_3" src="https://github.com/user-attachments/assets/7a57ec6d-3b6d-47bd-bc89-534a53117e30" />











# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
