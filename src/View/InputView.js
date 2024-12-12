import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGES } from '../config/inputMessage.js';
import {
  validateNumber,
  validateMenu,
} from '../utility/validataor/validate.js';
import { parseInputMenu } from '../utility/parser/parsing.js';

import OutputView from './OutputView.js';

const InputView = {
  async input(message) {
    return await Console.readLineAsync(message);
  },
  async readDate() {
    return await this.processInput(INPUT_MESSAGES.DATE, (inputNumber) => {
      validateNumber(inputNumber, 1, 31);
    });
  },
  async readMenu(isInMenu) {
    return await this.processInput(
      INPUT_MESSAGES.MENU,
      (parsedMenu) => validateMenu(parsedMenu, isInMenu),
      parseInputMenu,
    );
  },
  async processInput(inputMessage, validate = () => true, parse = (x) => x) {
    while (true) {
      try {
        const inputText = await this.input(inputMessage); // 사용자 입력
        const parsedInput = parse(inputText); // 입력 파싱
        return validate(parsedInput); // 검증 로직 결과 반환
      } catch (error) {
        OutputView.print(error.message); // 에러 메시지 출력
      }
    }
  },
};
export default InputView;
