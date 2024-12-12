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

  setPriceMenu(cart) {
    const newCart = [];
    cart.forEach((menu) => {
      this.menuList.forEach((menuWithCategory) => {
        const check = this.checkPriceInt(menuWithCategory, menu);
        if (check) {
          newCart.push(check);
        }
      });
    });
    return newCart;
  }

  checkPriceInt(menuWithCategory, menu) {
    let value = false;
    menuWithCategory.menu.forEach((menuWithPrice) => {
      if (menuWithPrice.name === menu.name) {
        const priceInt = menuWithPrice.price.replace(',', '').replace('원', '');
        value = { ...menu, price: parseInt(priceInt, 10) };
      }
    });
    return value;
  }
}
