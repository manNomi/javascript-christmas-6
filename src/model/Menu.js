export default class Menu {
  constructor(menuList) {
    this.menuList = menuList;
  }

  isInMenu = (menu) => {
    const isIn = [];
    this.menuList.forEach((menuWithCategory) => {
      isIn.push(this.checkMenu(menuWithCategory, menu.name));
    });

    return isIn.includes(true);
  };

  checkMenu(menuWithCategory, name) {
    let check = false;
    menuWithCategory.menu.forEach((menuWithPrice) => {
      if (menuWithPrice.name === name) check = true;
    });
    return check;
  }
}
