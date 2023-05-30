(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}t.d({},{d5:()=>ct,$x:()=>ut,TP:()=>nt,kN:()=>it,$i:()=>at});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e}var e,n;return e=t,(n=[{key:"_request",value:function(t,e){return fetch(t,e).then(this._checkResult)}},{key:"_checkResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return this._request("".concat(this._config.baseUrl,"/users/me"),{headers:this._config.headers})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._config.baseUrl,"/cards"),{headers:this._config.headers})}},{key:"addCard",value:function(t){return this._request("".concat(this._config.baseUrl,"/cards/"),{method:"POST",headers:this._config.headers,body:JSON.stringify({name:t.name,link:t.link})})}},{key:"updateAvatarInfo",value:function(t){return this._request("".concat(this._config.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._config.headers,body:JSON.stringify({avatar:t.avatar})})}},{key:"updateProfileInfo",value:function(t){return this._request("".concat(this._config.baseUrl,"/users/me"),{method:"PATCH",headers:this._config.headers,body:JSON.stringify({name:t.name,about:t.about})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._config.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._config.headers})}},{key:"setCardLike",value:function(t){return this._request("".concat(this._config.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._config.headers})}},{key:"deleteCardLike",value:function(t){return this._request("".concat(this._config.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._config.headers})}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._form=r,this._inputLists=Array.from(r.querySelectorAll(this._settings.formNameTextSelector)),this._submitButton=r.querySelector(this._settings.formButtonSelector),this._setEventListeners()}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));r.textContent=e,t.classList.add(this._settings.formNameTextTypeErrorSelector),r.classList.add(this._settings.formInputErrorActiveSelector)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",t.classList.remove(this._settings.formNameTextTypeErrorSelector),e.classList.remove(this._settings.formInputErrorActiveSelector)}},{key:"_isValid",value:function(t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputLists)?(this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.formButtonDisabledSelector)):(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.formButtonDisabledSelector))}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(this._inputLists),this._inputLists.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.toggleButtonState(t._inputLists)}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputLists.some((function(t){return!t.validity.valid}))}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._validatorsCollection={},this.enableValidation(e)}var e,r;return e=t,(r=[{key:"getValidatorByForm",value:function(t){return this._validatorsCollection[t.getAttribute("name")]}},{key:"prevalidateForm",value:function(t){this.getValidatorByForm(t).toggleButtonState()}},{key:"enableValidation",value:function(t){var e=this;Array.from(document.querySelectorAll(t.formSelector)).forEach((function(t){e._handleForm(t)}))}},{key:"_handleForm",value:function(t){var e=new u(this._settings,t),r=t.getAttribute("name");this._validatorsCollection[r]=e}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileAbout=document.querySelector(e.profileAboutSelector),this._profileAvatar=document.querySelector(e.profileAvatarSelector)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._data}},{key:"setUserInfo",value:function(t){this._data=t,this._profileName.textContent=t.name,this._profileAbout.textContent=t.about,this._profileAvatar.src=t.avatar}},{key:"getId",value:function(){return this._data._id}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),y=".popup_edit-profile",d=".popup_add_image",m=".popup_edit-avatar",h=".profile__info-cell-button",v=".profile__button",b=".profile__edit-avatar-button";function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=e.utils.profile.getId(),this._cardViewModel=e.cardData,this._cardView=e.utils.nodeFactory.createNodeFromTemplate(e.cardTemplate),this._canBeDeleted=this._cardViewModel.owner._id==this._userId,this._removeCardFunc=e.functions.removeCardFunc,this._cardViewFunc=e.functions.cardViewFunc,this._likeButton=this._cardView.querySelector(".element__button"),this._likeCounter=this._cardView.querySelector(".element__likes-number"),this._image=this._cardView.querySelector(".element__image"),this._cardNameText=this._cardView.querySelector(".element__text"),this._removeButton=this._cardView.querySelector(".element__button-trash"),this._webApi=e.utils.api,this._initializeCardView()}var e,r;return e=t,(r=[{key:"getCardView",value:function(){return this._cardView}},{key:"_initializeCardView",value:function(){this._canBeDeleted&&this._removeButton.classList.remove("hidden-node"),this._cardNameText.textContent=this._cardViewModel.name,this._image.src=this._cardViewModel.link,this._image.alt=this._cardViewModel.name,this._configureLikesView(this._cardViewModel),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._removeButton.addEventListener("click",this._removeCardFunc),this._likeButton.addEventListener("click",(function(e){return t._handleLikeButtonClick(e)})),this._image.addEventListener("click",(function(){t._cardViewFunc(t._cardViewModel)}))}},{key:"_handleLikeButtonClick",value:function(t){var e=this;this._cardViewModel.likes.some((function(t){return t._id==e._userId}))?this._webApi.deleteCardLike(this._cardViewModel._id).then((function(t){e._cardViewModel.likes=t.likes})).then((function(t){return e._configureLikesView()})).catch((function(t){return console.log("Ошибка: ".concat(t))})):this._webApi.setCardLike(this._cardViewModel._id).then((function(t){e._cardViewModel.likes=t.likes})).then((function(t){return e._configureLikesView()})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}},{key:"_configureLikesView",value:function(){var t=this;this._cardViewModel.likes.some((function(e){return e._id==t._userId}))?this._likeButton.classList.add("element__button_active"):this._likeButton.classList.remove("element__button_active"),this._likeCounter.textContent=this._cardViewModel.likes.length}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var P=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"setRenderer",value:function(t){this._renderer=t}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.setItem(e._renderer(t))}))}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),E=new Map,j=null,O=null,C=null,L=null,T=null,V=function(t){nt.getPopupBySelector(L).open(t)},B={initialize:function(t,e){return function(t,e){j=new P({cards:e,addCard:I},t),nt.initializePopup(C,(function(t){q(O).then((function(){nt.getPopupBySelector(C).close()})).finally((function(){nt.getPopupBySelector(C).renderLoading(!1)}))})),nt.initializePopup(L),e.forEach((function(t){return I(t)}))}(t,e)},createCard:function(t){return I(t)},remove:function(t){return q(t)},setConfig:function(t){return function(t){C=t.deleteConfirmationSelector,L=t.cardViewSelector,T=t.cardTemplate}(t)}};function I(t){if(t&&!E.has(t._id)){t.owner._id,it.getId();var e=new S({cardTemplate:T,cardData:t,functions:{removeCardFunc:function(){return e=t._id,O=e,void nt.getPopupBySelector(C).open();var e},cardViewFunc:V},utils:{api:at,nodeFactory:ct,popupManager:nt,profile:it}});E.set(t._id,e),j.addItem(e.getCardView())}}function q(t){var e=E.get(t);return at.deleteCard(t).then((function(t){return e.getCardView().remove()})).then((function(e){return E.delete(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,F(n.key),n)}}function F(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}var M=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=F(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this._keyHandler=function(t){return i._handleEscClose(t)}}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._keyHandler)}},{key:"close",value:function(){document.removeEventListener("keydown",this._keyHandler),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===N(o)?o:String(o)),n)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},U.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(n);if(o){var r=z(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._cardLink=e._popup.querySelector(".popup__image"),e._cardName=e._popup.querySelector(".popup__text-image"),e.setEventListeners(),e}return e=u,(r=[{key:"open",value:function(t){U(z(u.prototype),"open",this).call(this),this._cardName.textContent=t.name,this._cardLink.src=t.link,this._cardLink.alt=t.name}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(M);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===J(o)?o:String(o)),n)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},W.apply(this,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(n);if(o){var r=K(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunc=e,n._form=n._popup.querySelector(".form"),n._buttonSave=n._form.querySelector(".form__button"),n._inputs=Array.from(n._form.querySelectorAll(".form__name-text")),n._defaultSubmitText=n._buttonSave.textContent,n.setEventListeners(),n._formsValidationService=r,n}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){t&&this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"renderLoading",value:function(t){this._buttonSave.textContent=t?"Выполняется...":this._defaultSubmitText}},{key:"setEventListeners",value:function(){var t=this;W(K(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t.renderLoading(!0),t._submitFormFunc(t._getInputValues())}))}},{key:"open",value:function(t){this.setInputValues(t),W(K(u.prototype),"open",this).call(this),this._formsValidationService.prevalidateForm(this._form)}},{key:"close",value:function(){this._form.reset(),W(K(u.prototype),"close",this).call(this)}}])&&$(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(M),X=new Map,Y={initializePopup:function(t,e){return function(t,e){var r=document.querySelector(t),n=null;if(r.classList.contains("popup_type_edit")){if(!e)throw new Error("Cant init PopupWithForm without submit function!");n=new Q(t,e,ut)}else r.classList.contains("popup_type_view")&&(n=new H(t));X.set(t,n)}(t,e)},getPopupBySelector:function(t){return function(t){return X.get(t)}(t)}};function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===Z(o)?o:String(o)),n)}var o}var et=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,(r=[{key:"createNodeFromTemplate",value:function(t){return this._getTemplateByID(t).firstElementChild.cloneNode(!0)}},{key:"_getTemplateByID",value:function(t){return document.querySelector(t).content}}])&&tt(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var nt=Y,ot=B;B.setConfig({deleteConfirmationSelector:".popup_confirm-delete",cardViewSelector:".popup_open-card",cardTemplate:"#templateElements"});var it=new p({profileNameSelector:".profile__info-cell-text",profileAboutSelector:".profile__info-text",profileAvatarSelector:".profile__image"}),ut=new l({formSelector:".form",formNameTextSelector:".form__name-text",formButtonSelector:".form__button",formNameTextTypeErrorSelector:"form__name-text_type_error",formInputErrorActiveSelector:"form__input-error_active",formButtonDisabledSelector:"form__button_disabled"}),at=new n({baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-23",headers:{authorization:"70b0f800-c3d5-43c3-9a38-db0198e51959","Content-Type":"application/json"}}),ct=new et,lt=document.querySelector(h),st=document.querySelector(v),ft=document.querySelector(b);Promise.all([at.getUserInfo(),at.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return rt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];it.setUserInfo(o),ot.initialize(".elements",i)})).catch((function(t){console.log(t)})),nt.initializePopup(y,(function(t){return function(t){at.updateProfileInfo({name:t.name,about:t.about}).then((function(t){it.setUserInfo(t)})).then((function(){nt.getPopupBySelector(y).close()})).catch((function(t){console.log(t)})).finally((function(){nt.getPopupBySelector(y).renderLoading(!1)}))}(t)})),nt.initializePopup(d,(function(t){return function(t){at.addCard({name:t.cardName,link:t.cardUri}).then((function(t){return ot.createCard(t)})).then((function(){nt.getPopupBySelector(d).close()})).catch((function(t){console.log(t)})).finally((function(){nt.getPopupBySelector(d).renderLoading(!1)}))}(t)})),nt.initializePopup(m,(function(t){return function(t){at.updateAvatarInfo({avatar:t.avatar}).then((function(t){it.setUserInfo(t)})).then((function(){nt.getPopupBySelector(m).close()})).catch((function(t){console.log(t)})).finally((function(){nt.getPopupBySelector(m).renderLoading(!1)}))}(t)})),lt.addEventListener("click",(function(){nt.getPopupBySelector(y).open(it.getUserInfo())})),st.addEventListener("click",(function(){nt.getPopupBySelector(d).open()})),ft.addEventListener("click",(function(){nt.getPopupBySelector(m).open(it.getUserInfo())}))})();