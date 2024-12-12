import regexPatterns from './regexPatterns.js';
import { ERROR_MESSAGES } from '../../config/errorMessage.js';

export const validate = (input, patternKey) => {
  const { regex, description } = regexPatterns[patternKey];

  // 값이 정규식 패턴과 일치하는지 확인
  if (!regex.test(input)) {
    throw new Error(`${description}`);
  }

  // 검증 성공 시 true 반환
  return true;
};

export const validateMenu = (parsedMenu, isInMenu) => {
  let isOnlyDrink = true;
  parsedMenu.forEach((menu) => {
    if (menu.name !== '음료') isOnlyDrink = false;
    if (!isInMenu(menu)) throw new Error(ERROR_MESSAGES.INVALID_ORDER);
  });
  if (isOnlyDrink) throw new Error(ERROR_MESSAGES.INVALID_INPUT_DRINK);
  return parsedMenu;
};

export const validateNumber = (input, low, high) => {
  const number = parseInt(input, 10);
  if (isNaN(number)) throw new Error(ERROR_MESSAGES.INVALID_DATE);
  if (number < low || number > high)
    throw new Error(ERROR_MESSAGES.INVALID_DATE);
  return input;
};
