import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../config/outputMessage.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printMenu(menuList) {
    console.log(menuList);
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
    if (!value) this.print('없음');
    this.print(value);
  },
  printEvent(events) {
    events.forEach((event) => {
      this.print(`${event.name}: -${this.formatMoney(event.discount)}원`);
    });
  },
  printDisCountTotal(discountMoney) {
    this.print(`-${this.formatMoney(discountMoney)}원`);
  },
  printPurchaseMoney(total) {
    this.print(`${this.formatMoney(total)}원`);
  },
  printBadge(badge) {
    if (badge) {
      this.print(badge);
      return;
    }
    this.print('없음');
  },
  formatMoney(money) {
    return `${money.toLocaleString()}원`;
  },
};
export default OutputView;
