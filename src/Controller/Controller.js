import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import fetchFile from '../utility/readFile/readFile.js';

class Controller {
  constructor() {
    this.inputService = new InputService();
    this.outputService = new OutputService();
  }

  async run() {
    const menuText = fetchFile('menu.md');
    console.log(menuText);
  }
}

export default Controller;
