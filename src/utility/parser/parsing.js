/**
 * 콤마로 구분된 문자열을 배열로 변환
 * @param {string} str - 콤마로 구분된 문자열
 * @returns {Array} 변환된 배열
 */
import regexPatterns from '../validataor/regexPatterns.js';

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
      const name = menuWithPrice.split('(')[0];
      const price = menuWithPrice.split('(')[1];
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
