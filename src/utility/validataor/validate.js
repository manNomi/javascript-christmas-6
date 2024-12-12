import regexPatterns from './regexPatterns.js';

export const validate = (input, patternKey) => {
  const { regex, description } = regexPatterns[patternKey];

  // 값이 정규식 패턴과 일치하는지 확인
  if (!regex.test(input)) {
    throw new Error(`${description}`);
  }

  // 검증 성공 시 true 반환
  return true;
};

export const validateNumber = (input, low, high) => {
  if (!Number.isNaN(input)) return false;
  const number = parseInt(input, 10);
  if (number < low || number > high) return false;
  return true;
};
