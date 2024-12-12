export default class Menu {
  constructor(inputMenu) {
    this.menuList = inputMenu;
  }

  getCart() {
    return this.menuList;
  }

  getTotal() {
    let total = 0;
    this.menuList.forEach((menu) => {
      total += menu.price * menu.count;
    });
    return total;
  }
}
