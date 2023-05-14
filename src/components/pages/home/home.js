import CardComponent from '../../molecules/card/card.js';

export default class HomeComponent {
    constructor(
    ) {
        this._title = 'soy el titulo de la home';
    }

    renderHTML() {
        return `
            <div class="home">
                <h1>${this._title}</h1>
                ${(new CardComponent).renderHTML()};
            </div>
        `
    }
}