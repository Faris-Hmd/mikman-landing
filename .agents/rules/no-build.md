---
trigger: always_on
description: "Strictly forbids running npm run build or next build commands."
---

# Strictly Avoid Running Build Commands

- **DO NOT RUN `npm run build` or `next build`**.
- Running build commands overwrites the local `.next` directory while `npm run dev` is active, which breaks the running dev server and causes `MODULE_NOT_FOUND` errors.
- Rely on `npm run dev` and standard hot module reloading (HMR) for testing and development.
