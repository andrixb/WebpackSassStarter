import '../scss/main.scss';
// const sprite = require.context('../svg/sprite', false, /\.svg$/);
// sprite.keys().forEach(sprite);

import MockComponent from './mock-component/index';

export default class App {
    constructor() {
        console.log('App start');
        this.init();
    }

    init(): void {
        new MockComponent();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();   
});
