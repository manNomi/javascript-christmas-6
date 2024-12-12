import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import fetchFile from '../utility/readFile/readFile.js';
import { parsingMenu } from '../utility/parser/parsing.js';
import Menu from '../model/Menu.js';

class Controller {
  constructor() {
    this.inputService = new InputService();
    this.outputService = new OutputService();
    this.menu = null;
  }

  async run() {
    this.setMenu();
  }

  setMenu() {
    const menuText = fetchFile('menu.md');
    const menuList = parsingMenu(menuText);
    this.menu = new Menu(menuList);
  }
}

export default Controller;
