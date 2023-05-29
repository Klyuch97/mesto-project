'use strict';

export class NodeFactory {
  constructor() { }
  createNodeFromTemplate(id) {
    return this._getTemplateByID(id).firstElementChild.cloneNode(true);
  }

  _getTemplateByID(id) {
    return document.querySelector(id).content;
  }
};
