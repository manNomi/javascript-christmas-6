/**
 * 콤마로 구분된 문자열을 배열로 변환
 * @param {string} str - 콤마로 구분된 문자열
 * @returns {Array} 변환된 배열
 */
import regexPatterns from '../validataor/regexPatterns.js';

export const parseInputMenu = (input) => {
  const menuList = input.split(',');
  const result = [];
  menuList.forEach((menu) => {
    const menuString = menu.split('-');
    const name = menuString[0].trim();
    const count = menuString[1].trim();
    result.push({ name, count });
  });
  return result;
};

export const parseCommaSeparatedString = (str) =>
  str.split(',').map((item) => item.trim());

export const parseCommaSeparatedInt = (str) =>
  str.split(',').map((item) => parseInt(item.trim(), 10));

export const parsingMenu = (menu) => {
  const regex = new RegExp(regexPatterns.EXTRACT_BETWEEN_ANGLE_BRACKETS.regex);

  const menus = menu.split('\n');
  const categoryList = [];
  const menuList = [];
  menus.forEach((textLine) => {
    const category = regex.exec(textLine);
    if (category !== null) {
      categoryList.push(category[1]);
      return;
    }
    const menuText = textLine.split('),');
    const menuWithPriceResult = [];
    menuText.forEach((menuWithPrice) => {
      const name = menuWithPrice.split('(')[0]?.trim();
      const price = menuWithPrice.split('(')[1]?.trim();
      if (!name || !price) return;
      menuWithPriceResult.push({ name, price });
    });
    if (menuWithPriceResult.length === 0) return;
    menuList.push({
      category: categoryList[menuList.length],
      menu: menuWithPriceResult,
    });
  });
  return menuList;
};

/**
 * 날짜 문자열을 객체로 변환
 * @param {string} dateStr - 날짜 문자열 (예: "2024-12-10")
 * @returns {Object} 날짜 객체 { year, month, day }
 */
export function parseDateString(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return { year, month, day };
}
