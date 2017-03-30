import './polyfill/reset.scss';
import './indexStyle.scss';

import MockComponent from './MockComponent/MockComponent';
import Mock2Component from './Mock2Component/Mock2Component';

export default class App {
    constructor() {
        this.mock = MockComponent();
        this.mock2 = Mock2Component();
    }
    render() {
        return `
            <div class="container">
                <div class="element">${this.mock}</div>
                <div class="element">${this.mock2}</div>
            </div>
        `;
    }
}

let app = {};
app = new App();
const mainDiv = document.querySelector('#root');
mainDiv.innerHTML = app.render();
