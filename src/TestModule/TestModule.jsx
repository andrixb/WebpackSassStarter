
import './TestModule.style';

export default class TestModule {

    create() {
        var el = document.createElement('h1');
         el.setAttribute('class', 'testmodule__header');
         el.innerHTML = "Test"
         return el;
    }
}
