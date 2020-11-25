<!-- logo (start) -->
<p align="center">
  <img src=".github/img/logo.svg" width="180px">
</p>

<p align="center">
  <img src=".github/img/banner.svg" width="450px">
</p>
<!-- logo (end) -->

<!-- badges (start) -->
<p align="center">
  <img src="https://img.shields.io/github/license/uicrooks/mjml-twig-mails">
</p>
<!-- badges (end) -->

<!-- title / description (start) -->
<h2 align="center">MJML-Twig Mails</h2>

Blazing fast mail templating environtment with ✉ MJML + 🌿 Twig. Create responsive emails quickly with less code.
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
- NPM or Yarn
<!-- system requirements (end) -->

<!-- getting started (start) -->
## Getting started
Install dependencies and run webpack-dev-server

```shell
$ npm install
```

```shell
$ npm run dev
```
<!-- getting started (end) -->

<!-- production (start) -->
## Production
Generate minified `.html` files and copy `assets/` directory to `dist/`

```shell
$ npm run build
```
<!-- production (end) -->

<!-- directories (start) -->
## Directories
| Directory | Description |
| --- | --- |
| .config | contains webpack configs |
| src | contains webpacks main entry point `main.js` which auto-loads all `.twig` files inside `src/templates` |
| src/assets | contains images |
| src/components | contains defined components |
| src/data | contains `.yaml` files. The contents are accessible in all `.twig` files |
| src/layouts | contains layouts |
| src/templates | contains mail templates. A newly created template can be accessed in the browser by typing `/template-name` after the dev-server-url. For exmaple: `http://localhost:8080/template-name` |
<!-- directories (end) -->

<!-- documentation (start) -->
## Documentation
- [MJML docs](https://documentation.mjml.io/)
- [Twig docs](https://twig.symfony.com/doc/2.x/)
<!-- documentation (end) -->

<!-- license (start) -->
## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Sergej Samsonenko
<!-- license (end) -->