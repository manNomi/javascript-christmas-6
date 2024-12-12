export default class Menu {
  constructor(menuList) {
    this.menuList = menuList;
  }

  isInMenu = (name) => {
    let isIn = false;
    this.menuList.forEach((menu) => {
      if (menu.includes(name)) isIn = true;
    });
    return isIn;
  };
}
