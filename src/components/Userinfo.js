export default class UserInfo {
  //Получил селекторы с имeнем,информацией и аватаром
  constructor({ userNameSelector, userAboutSelector, avatarSelector }) {
    this.userName = document.querySelector(userNameSelector);
    this.userAbout = document.querySelector(userAboutSelector);
    this.avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this.userName.textContent,
      about: this.userAbout.textContent,
      avatar: this.avatar.src,
    };
  }

  setUserInfo(data) {
    this._myId = data._id;
    this.userName.textContent = data.name;
    this.userAbout.textContent = data.about;
    this.avatar.src = data.avatar;
  };
}

