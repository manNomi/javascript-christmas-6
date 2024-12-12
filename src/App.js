import Contoller from './Controller/Controller.js';

class App {
  async run() {
    const contoller = new Contoller();
    contoller.run();
  }
}

export default App;
