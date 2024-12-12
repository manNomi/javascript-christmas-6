export default class Menu {
  constructor(inputMenu) {
    this.menuList = inputMenu;
  }

  getCart() {
    return this.menuList;
  }
}
