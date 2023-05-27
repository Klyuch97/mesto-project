export class UserInfo {
  //Получил селекторы с имeнем,информацией и аватаром
  constructor(userInfoSettings) {
    this._profileName = document.querySelector(userInfoSettings.profileNameSelector);
    this._profileAbout = document.querySelector(userInfoSettings.profileAboutSelector);
    this._profileAvatar = document.querySelector(userInfoSettings.profileAvatarSelector);
  }
  // получить данные из профиля
  getUserInfo() {
    return this._data;
  }
  //добавить информацию в профиль из формы вместе с моим id
  setUserInfo(data) {
    this._data = data;
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  };
  //вернуть мой id
  getId() {
    return this._data._id;
  }
}
