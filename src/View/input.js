import { Console } from '@woowacourse/mission-utils';

// 단순 입력을 처리하는 함수
const input = async (message) => await Console.readLineAsync(message);

export default input;
