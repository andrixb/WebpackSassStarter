import './MockComponentStyle.scss';

export default class MockComponent {
    render() {
        return '<p class="mockcomponent">Lorem dolor sit amet, consectetur adipisicing elit.</p>';
    }
}

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
