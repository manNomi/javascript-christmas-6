import { OUTPUT_MESSAGES } from '../config/outputMessage.js';
import print from './print.js';

const OutputView = {
  printMenu() {
    ('<주문 메뉴>');
  },
  printStart() {
    print(OUTPUT_MESSAGES.START_MESSAGE);
  },
};
export default OutputView;
