---
name: never-run-build
description: "Guideline to ensure the AI never executes npm run build or next build in this project."
---

# Never Run Build Rule

## Instructions
1. Never run `npm run build`, `npx next build`, or any production build command.
2. The user runs `npm run dev` in the background for real-time previewing.
3. Executing a build mutates `.next/server` artifacts and disrupts the running development server.
