import input from '../View/input.js';
import print from '../View/print.js';

export default class InputService {
  constructor() {
    this.outputView = { print };
  }

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
  }

  async inputWithPattern(inputMessage, pattern, errorMessage) {
    return await this.processInput(inputMessage, (inputText) => {
      if (!pattern.test(inputText)) {
        throw new Error(`${errorMessage}: ${pattern}`);
      }
      return inputText;
    });
  }

  async inputBoolean(inputMessage) {
    return await this.processInput(inputMessage, (inputText) => {
      const lowerInput = inputText.toLowerCase();
      if (['yes', 'y'].includes(lowerInput)) return true;
      if (['no', 'n'].includes(lowerInput)) return false;
      throw new Error(
        '유효하지 않은 입력입니다. "yes" 또는 "no"를 입력하세요.',
      );
    });
  }
}
