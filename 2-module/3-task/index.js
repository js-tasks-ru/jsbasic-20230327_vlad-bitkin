let calculator = {
  read (a, b) {
    this.one = a; 
    this.two = b;
  },

  sum () {
    return this.one + this.two;
  },

  mul () {
    return this.one * this.two;
  }

};

// calculator.read(3, 5);
// console.log(calculator.sum()); // 8
// console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
