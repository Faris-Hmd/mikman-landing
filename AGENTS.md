# Project Rules for Mikman Landing

## Strict Rules
- **NEVER run `npm run build` or any build commands** (`next build`, `npm run build`, etc.).
- Running build commands mutates the `.next` directory while `npm run dev` is running, causing runtime errors in the development server (`MODULE_NOT_FOUND`).
- Always rely on `npm run dev` (or HMR / dev server output) for verifying changes.
