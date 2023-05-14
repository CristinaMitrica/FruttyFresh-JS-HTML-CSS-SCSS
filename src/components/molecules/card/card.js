export default class CardComponent {
    constructor() {
        this._text = 'un texto de la card';
    }

    renderHTML() {
        return `
            texto ${this._text}
        `
    }
}