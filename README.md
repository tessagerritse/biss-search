# biss-search

Vue 3 app for building and running citation-analysis search queries. Search view has a queries sidebar, a results pane, and a right-hand search panel with a query builder (dataset, semantic search, law references, keywords, date range, instances, domains, advanced settings). Submit runs a search (currently dummy results); Reset restores the form to its initial state.

## Project setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Recommended IDE setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended browser setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type support for `.vue` imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so the project uses `vue-tsc` for type checking. In editors, use [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for TypeScript and Vue support.

## Configuration

See [Vite Configuration Reference](https://vite.dev/config/).
