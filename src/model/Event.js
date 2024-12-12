export default class Event {
  constructor(date, cart) {
    this.date = date;
    this.cart = cart;
    this.day = new Date(`2023-12-${date}`);
    this.evnetTotal = [];
  }

  isCanEvnet(totalMoney) {
    if (totalMoney <= 10000) return false;
    return true;
  }

  checkCrithmasTheDay() {
    const startDate = new Date('2023-12-1');
    const endDate = new Date('2023-12-1');
    if (this.day >= startDate && this.day <= endDate) {
      const discount = 1000 + (this.date - 1) * 100;
      this.evnetTotal.push({ discount, name: '크리스마스 디데이 할인' });
      return discount;
    }
    return 0;
  }

  checkNotHoliday() {
    if (this.day.getDay() < 5) return 0;
    const desert = [];
    this.cart.forEach((menu) => {
      if (menu.category === '디저트') {
        desert.push(menu);
      }
    });
    const discount = desert.length * 2023;
    this.evnetTotal.push({ discount, name: '평일할인' });
    return discount;
  }

  checkHoliday() {
    if (this.day.getDay() >= 5) return 0;
    const main = [];
    this.cart.forEach((menu) => {
      if (menu.category === '디저트') {
        main.push(menu);
      }
    });
    const discount = main.length * 2023;
    this.evnetTotal.push({ discount, name: '주말할인' });
    return discount;
  }

  checkSpecialDay() {
    const crithMas = new Date('2024-12-25');
    if (this.date.getDay() === 6 || this.date === crithMas) {
      const discount = 1000;
      this.evnetTotal.push({ discount, name: '특별할인' });
      return discount;
    }
    return 0;
  }

  checkPlusMenu(totalMoney) {
    if (totalMoney >= 120000) {
      this.evnetTotal.push({ discount: 25000, name: '증정 이벤트' });
      return 1;
    }
    return 0;
  }

  checkBadge(totalMoney) {
    if (totalMoney <= 5000) {
      return null;
    }
    if (totalMoney <= 10000) {
      return '별';
    }
    if (totalMoney <= 20000) {
      return '트리';
    }
    return '산타';
  }

  getTotalDiscountMoney() {
    let total = 0;
    this.evnetTotal.forEach((event) => {
      total += event.discount;
    });
    return total;
  }
}
