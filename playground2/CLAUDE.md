# Claude Compatibility Notes

This file exists so Claude-family agents receive the same repository guidance.
`AGENTS.md` is the source of truth. Keep this file aligned with it.

## Documentation Priority

1. Start with `docs/introduction/getting-started.md`.
2. Use `docs/api/react-sdk/` as the primary API reference.
3. Use `docs/how-to/` only for setup and integration topics.
4. Use `README.md` for project-specific entry points and task context.

## Sources To Avoid

- Do not use `docs/guide/`.
- Do not use `docs/introduction/core-concepts.md`.
- Do not rely on `https://webspatial.dev` or other remote legacy docs.
- If anything conflicts, local `docs/` wins.

## Working Rules

- Confirm WebSpatial APIs from local docs first.
- If local docs are incomplete, inspect typings or source from `@webspatial/react-sdk` and `@webspatial/core-sdk`.
- Do not invent APIs from missing docs or old public references.
- Prefer small, verifiable changes over speculative refactors.
