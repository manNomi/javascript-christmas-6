import input from './input.js';
import { INPUT_MESSAGES } from '../config/inputMessage.js';
import { validateNumber } from '../utility/validataor/validate.js';

const InputView = {
  async readDate() {
    this.processInput(INPUT_MESSAGES.DATE, (inputNumber) => {
      validateNumber(inputNumber, 1, 31);
    });
  },
  async processInput(inputMessage, validate = () => true, parse = (x) => x) {
    while (true) {
      try {
        const inputText = await input(inputMessage); // 사용자 입력
        const parsedInput = parse(inputText); // 입력 파싱
        return validate(parsedInput); // 검증 로직 결과 반환
      } catch (error) {
        this.outputView.print(error.message); // 에러 메시지 출력
      }
    }
  },
};
export default InputView;
