import style from './index.css';

class App {
    render() {
        console.log(style);
        const element = `
            <div class="element">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>`;

        return element;
    }
}

var app = new App();
document.write(app.render());
