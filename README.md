# Intention

This repository has been created in order to have a minimal FE setup for any application architecture based on web components.

It uses Sass (with .scss/.sass). The style is loaded at each the component level.

Dependencies can be handled by **Yarn**.

See the example in the `src` folder for a basic usage of this starter kit.

**HMR doesn't work properly**
At the moment `watchContentBase` is set to `true` as a fallback

Needs to investigate into this
http://stackoverflow.com/documentation/webpack/4594/hot-module-replacement#t=20170306121305623111
https://webpack.js.org/guides/hmr-react/
)

TODO
- set env variables for `DEV` and `PROD`

- create a new repository for React FEsetup that uses HMR

## Usage
`yarn`
`npm start-dev`
