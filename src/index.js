import './test.css';
import './index.scss';

import MockComponent from './MockComponent/MockComponent';

export default class App {
    constructor() {
        this.mock = new MockComponent();
    }
    render() {
        return `<div class="element">${this.mock.render()}</div>`;
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
