import '../scss/main.scss';
// const sprite = require.context('../svg/sprite', false, /\.svg$/);
// sprite.keys().forEach(sprite);
import WebFont from 'webfontloader';

import MockComponent from './mock-component';

export default class App {
    constructor() {
        console.log('App start');
        this.init();
    }

    init() {
        new MockComponent();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    WebFont.load({
        custom: {
            families: ['font'],
        },
        active: () => {
            new App();
        },
        inactive: () => {
            new App();
        },
    });
});
