# Project Instructions For AI Coding Agents

These instructions apply to this repository only.
If a deeper directory contains another instruction file, the deeper file wins.

## Documentation Priority

1. Start with `docs/introduction/getting-started.md`.
   - Use it to understand the WebSpatial model, setup flow, platform constraints, and preview workflow.
2. Use `docs/api/react-sdk/` as the primary API reference.
   - This is the main source for React SDK APIs.
   - Look up APIs by their exact category and name.
3. Use `docs/how-to/` only for setup and integration topics.
   - Examples: SSR, Rspack, non-TypeScript projects, minimal PWA setup, Xcode, App Store Connect.
4. Use `README.md` for project-specific context.
   - Check it before editing to find the active entry points and the intended playground task.

## Sources To Avoid

- Do not use any document under `docs/guide/`.
  - Some local docs link to that path, but those files are intentionally unavailable in this repository.
- Do not use `docs/introduction/core-concepts.md`.
  - It is missing in this repository.
- Do not rely on `https://webspatial.dev` or other older remote WebSpatial documentation.
  - When there is any conflict, local `docs/` always wins.

## Working Rules For WebSpatial Tasks

- Before changing WebSpatial code, confirm the required API exists in local docs or package typings.
- Prefer exact API names and signatures from local docs over memory or guesswork.
- If local docs are incomplete, inspect package typings or source from:
  - `@webspatial/react-sdk`
  - `@webspatial/core-sdk`
- Do not invent APIs from broken links, missing guide pages, or older public docs.
- If documentation is ambiguous, say so explicitly in the final summary and note which fallback source was used.

## Project Context

- This repository is a playground for spatializing an existing gallery-style React page with WebSpatial DOM APIs and CSS variables.
- Read `README.md` before making code changes so you start from the correct entry point.
- The current commonly referenced paths are:
  - `src/pages/main/App.tsx`
  - `src/pages/main/component/Nav.tsx`
  - `src/pages/main/component/ImageCard.tsx`
  - `src/pages/main/**/*.css`

## Common Commands

- `pnpm dev`
- `pnpm dev:webspatial`
- `pnpm build`
- `pnpm lint`

## Change Discipline

- Keep changes small, testable, and aligned with the currently documented local API.
- Prefer adapting the existing React structure over speculative refactors.
- When docs and code appear inconsistent, trust local docs for intended usage and verify exact names against installed package typings when available.
