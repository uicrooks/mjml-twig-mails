<!-- logo (start) -->
<p align="center">
  <img src=".github/img/logo.svg" width="180px">
</p>

<p align="center">
  <img src=".github/img/banner.svg" width="450px">
</p>
<!-- logo (end) -->

<!-- title / description (start) -->
<h2 align="center">MJML-Twig Mails</h2>

Blazing fast mail templating environment with ✉ MJML + 🌿 Twig. Create responsive emails quickly with less code.
<!-- title / description (end) -->

<!-- features (start) -->
## Features
- MJML
- Twig
- Yaml
- Webpack
- Webpack-dev-server
<!-- features (end) -->

<!-- system requirements (start) -->
## System requirements
- Node.js
- npm or yarn
<!-- system requirements (end) -->

<!-- getting started (start) -->
## Getting started
Install dependencies and run webpack-dev-server:

### npm

```shell
$ npm install
```

```shell
$ npm run dev
```

### yarn

```shell
$ yarn import # migrate package-lock.json to yarn.lock
$ rm package-lock.json # or delete manually
$ yarn install --force
```

```shell
$ yarn dev
```

### Optional
If the server port is already in use, adjust `devServerPort` in `package.json`
<!-- getting started (end) -->

<!-- production (start) -->
## Production
Generate minified `.html` files and copy `assets/` directory to `dist/`:

### npm

```shell
$ npm run build
```

### yarn

```shell
$ yarn build
```
<!-- production (end) -->

<!-- directories (start) -->
## Directories
| Directory | Description |
| --- | --- |
| .config | Contains webpack configs. |
| src | Contains webpack's main entry point `main.js` which auto-loads all `.twig` files inside `src/templates/` and all subdirectories. |
| src/assets | Contains images. |
| src/components | Contains reusable components. |
| src/data | Contains `.yml` files. The contents are accessible in all `.twig` files. |
| src/layouts | Contains layouts. |
| src/templates | Contains mail templates. A newly created template can be accessed in the browser by typing `/template-name` after the dev-server-url. Exmaple: `http://localhost:8080/template-name`. The `index.twig` template is reserved for navigation. |
<!-- directories (end) -->

<!-- documentation (start) -->
## Documentation
- [MJML docs](https://documentation.mjml.io/)
- [Twig docs](https://twig.symfony.com/doc/2.x/)
<!-- documentation (end) -->