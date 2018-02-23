### Last Update Feb 2018.

# Intention

This repository has been created in order to have a minimal FE setup for any application architecture based on web components.

It uses Sass (with .scss/.sass).
**Pug** is used as templating engine: change webpack config to generate new pages through HtmlWebpackPlugin.

Dependencies can be handled by **Yarn**.

See the example in the `src` folder for a basic usage of this starter kit.


TODO
- create a new repository for React FEsetup that uses HMR

## Usage
- `yarn` to install dependencies

- `npm start` for developing (it runs build:dev and webpack-dev-server)
- `npm run start:server` to startup webserver (for production testings)

- `npm run build:dev` to run a dev build
- `npm run build` to run production build

- `npm run clean`: for a clean build 

- `npm run lint:js` lints javascript
- `npm run lint:css`  lints css
- `npm run lint:html` lints html
- `npm run lint` run all the linters

- `npm test` run the test suites

For precommit add the script `"precommit": "npm run lint"`
