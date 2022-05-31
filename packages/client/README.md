# preprocessor-api-client

Data clean module - Preprocessor.

## General folders layout

- [src](./src) - directory with source code
  - [providers](./src/providers) - clients
  - [tokens](./src/tokens) - injection tokens
  - [clientModule.ts](./src/clientModule.ts) - main client module

## Dependencies

Package dependencies are listed in [package.json](./package.json) file.
All internal dependencies must be built before build package.

## Building locally

Package can be build locally using the following command:

```bash
yarn run build
```
