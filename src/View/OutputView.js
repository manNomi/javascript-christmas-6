import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../config/outputMessage.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printMenu() {
    ('<주문 메뉴>');
  },
  printStart() {
    this.print(OUTPUT_MESSAGES.START_MESSAGE);
  },
};
export default OutputView;
