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
    this.outputView.printMenu();
    this.cart = new Cart(inputMenu);
    this.event = new Event(inputDate, this.cart.getCart());
  }

  setMenu() {
    const menuText = fetchFile('menu.md');
    const menuList = parsingMenu(menuText);
    this.menu = new Menu(menuList);
  }
}

export default Controller;
