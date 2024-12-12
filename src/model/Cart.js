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
      console.log(menu);
      total += menu.price;
    });
    return total;
  }
}
