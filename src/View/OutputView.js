import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../config/outputMessage.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printMenu(menuList) {
    this.print(OUTPUT_MESSAGES.ORDER_MESSAGE);
    menuList.forEach((menu) => {
      this.print(`${menu.name} ${menu.count}개`);
    });
  },
  printStart() {
    this.print(OUTPUT_MESSAGES.START_MESSAGE);
  },

  printNotDiscount(money) {
    this.print(OUTPUT_MESSAGES.NOT_DISCOUNT_TOTAL_MESSAGE);
    this.print(this.formatMoney(money));
  },
  printPlus(value) {
    this.print(OUTPUT_MESSAGES.PLUS_MESSAGE);
    if (value === 0) {
      this.print('없음');
      return null;
    }
    this.print(value);
    return null;
  },
  printEvent(events) {
    this.print(OUTPUT_MESSAGES.PROMOTION_LIST_MESSAGE);
    if (events.length === 0) this.print('없음');
    events.forEach((event) => {
      this.print(`${event.name}: ${this.formatMoney(-event.discount)}`);
    });
  },
  printDisCountTotal(discountMoney) {
    this.print(OUTPUT_MESSAGES.PROMOTION_TOTAL_COUNT);
    this.print(`${this.formatMoney(-discountMoney)}`);
  },
  printPurchaseMoney(total) {
    this.print(OUTPUT_MESSAGES.DISCOUNT_TOTAL_MESSAGE);
    this.print(`${this.formatMoney(total)}`);
  },
  printBadge(badge) {
    this.print(OUTPUT_MESSAGES.BADGE_MESSAGE);
    if (badge) {
      this.print(badge);
      return;
    }
    this.print('없음');
  },
  formatMoney(money) {
    if (money === 0) return '0원';
    return `${money.toLocaleString()}원`;
  },
};
export default OutputView;
