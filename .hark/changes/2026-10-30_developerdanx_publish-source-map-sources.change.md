---
title: Publish sources referenced by source maps
semver_level: patch
---

- Include the TypeScript sources referenced by the CJS and ESM source maps in the published package, so debuggers and tools such as Vite and Vitest can resolve them.
