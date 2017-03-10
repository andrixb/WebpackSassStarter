import './polyfill/reset.css';
import './indexStyle.scss';

import MockComponent from './MockComponent/MockComponent';
import Mock2Component from './Mock2Component/Mock2Component';

export default class App {
    constructor() {
        this.mock = new MockComponent();
        this.mock2 = new Mock2Component();
    }
    render() {
        return `<div class="container">
                    <div class="element">${this.mock.render()}</div>
                    <div class="element">${this.mock2.render()}</div>
                </div>`;
    }
}

let app = {};
app = new App();
const mainDiv = document.querySelector('#root');
mainDiv.innerHTML = app.render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
