import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import fetchFile from '../utility/readFile/readFile.js';
import { parsingMenu } from '../utility/parser/parsing.js';
import Menu from '../model/Menu.js';

class Controller {
  constructor() {
    this.outputView = new OutputView();
    this.inputView = new InputView();
    this.menu = null;
  }

  async run() {
    this.setMenu();
    this.outputView.printStart();
    this.inputView.readDate();
  }

  setMenu() {
    const menuText = fetchFile('menu.md');
    const menuList = parsingMenu(menuText);
    this.menu = new Menu(menuList);
  }
}

export default Controller;
