import { Random } from '@woowacourse/mission-utils';
import MissionUtils from 'mission-utils';
import Calculator from './Calculator.js';

// __tests__/randomUtils.test.js
import { getRandomNumber } from './randomUtils';

describe('Calculator 클래스 테스트', () => {
  let calculator;

  // 각 테스트 실행 전에 Calculator 인스턴스를 생성
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add 함수', () => {
    test('1과 2를 더하면 3이 반환되어야 한다.', () => {
      const result = calculator.add(1, 2);
      expect(result).toBe(3);
    });

    test('-1과 1을 더하면 0이 반환되어야 한다.', () => {
      const result = calculator.add(-1, 1);
      expect(result).toBe(0);
    });
  });

  describe('subtract 함수', () => {
    test('5에서 3을 빼면 2가 반환되어야 한다.', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    test('3에서 5를 빼면 -2가 반환되어야 한다.', () => {
      const result = calculator.subtract(3, 5);
      expect(result).toBe(-2);
    });
  });
});

describe('테스트', () => {
  let value;
  beforeEach(() => {
    value = 0;
  });
  test('숫자 테스트', () => {
    value += 1;
    expect(value.toBe(1));
  });
});
describe('MissionUtils.Random.pickRandom Mocking', () => {
  it('pickRandom이 항상 5를 반환하도록 Mocking', () => {
    // pickRandom을 Mocking
    jest.spyOn(MissionUtils.Random, 'pickRandom').mockReturnValue(5); // pickRandom 호출 시 항상 5 반환

    const result = getRandomNumber();

    // 반환값 검증
    expect(result).toBe(5);

    // Mock 복구
    MissionUtils.Random.pickRandom.mockRestore();
  });

  it('pickRandom이 여러 값(1, 3, 7)을 순차적으로 반환하도록 Mocking', () => {
    // pickRandom을 Mocking
    jest
      .spyOn(MissionUtils.Random, 'pickRandom')
      .mockReturnValueOnce(1) // 첫 번째 호출: 1 반환
      .mockReturnValueOnce(3) // 두 번째 호출: 3 반환
      .mockReturnValueOnce(7); // 세 번째 호출: 7 반환

    expect(getRandomNumber()).toBe(1);
    expect(getRandomNumber()).toBe(3);
    expect(getRandomNumber()).toBe(7);

    // Mock 복구
    MissionUtils.Random.pickRandom.mockRestore();
  });
});
