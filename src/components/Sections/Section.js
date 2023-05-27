export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  //добавить контент
  addItem(nodeElement) {
    this._container.prepend(nodeElement);
  }
  setRenderer(renderer) {
    this._renderer = renderer;
  }
//отобразить контент
  renderItems(items) {
    items.forEach((item) => {
      this.setItem(this._renderer(item));
    });
  }
}

