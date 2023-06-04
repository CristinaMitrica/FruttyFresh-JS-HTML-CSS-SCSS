export default class RenderPageService {
       
    constructor() {};

    _getMainHTMLRef() {
        return document.querySelector('main');
    }

    _addPage(page) {
        const mainElement = this._getMainHTMLRef();
        mainElement.innerHTML = page;
    }

    _clearMain() {
        const mainElement = this._getMainHTMLRef();
        mainElement.innerHTML = '';
    }
    
    renderMainPage(page) {
        this._clearMain();
        this._addPage(page);
    }
};