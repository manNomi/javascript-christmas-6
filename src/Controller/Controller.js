import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import fetchFile from '../utility/readFile/readFile.js';
import { parsingMenu } from '../utility/parser/parsing.js';
import Menu from '../model/Menu.js';
import Cart from '../model/Cart.js';
import Event from '../model/Event.js';

class Controller {
  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.menu = null;
    this.cart = null;
    this.event = null;
  }

  async run() {
    this.setMenu();
    this.outputView.printStart();
    const inputDate = await this.inputView.readDate();
    const inputMenu = await this.inputView.readMenu(this.menu.isInMenu);
    const menuWithPrice = this.menu.setPriceMenu(inputMenu);
    this.outputView.printMenu(menuWithPrice);
    this.cart = new Cart(menuWithPrice);
    this.event = new Event(inputDate, menuWithPrice);
    this.printResult();
  }

  setMenu() {
    const menuText = fetchFile('menu.md');
    const menuList = parsingMenu(menuText);
    this.menu = new Menu(menuList);
  }

  printResult() {
    const total = this.cart.getTotal();
    const discountTotal = this.event.getTotalDiscountMoney();
    this.outputView.printNotDiscount(total);
    this.outputView.printEvent(this.event.getEventTotal());
    this.outputView.printDisCountTotal(this.event.getTotalDiscountMoney());
    this.outputView.printPurchaseMoney(total - discountTotal);
    this.outputView.printPlus(this.event.checkPlusMenu());
    this.outputView.printBadge(this.event.checkBadge());
  }
}

export default Controller;
