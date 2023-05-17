export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  //добавить контент
 setItem(element) {
    this._container.prepend(element);
  }
//отобразить контент
  renderItems(items) {
    items.forEach((item) => {
      const element = this._renderer(item);
      this.setItem(element);
    });
  }
}

