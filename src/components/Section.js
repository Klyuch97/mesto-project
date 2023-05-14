export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach((item) => {
      const element = this._renderer(item);
      this.setItem(element);
    });

  }

  setItem(element) {
    this._container.append(element);
  }
}

