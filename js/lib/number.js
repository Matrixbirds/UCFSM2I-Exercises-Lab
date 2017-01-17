class Number {
  constructor(num) {
    this.num = num;
  }

  get inspect() {
    return `<${this.num}>`;
  }
}

module.exports = Number;
