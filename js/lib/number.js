class Number {
  constructor(num) {
    this.num = num;
  }

  get inspect() {
    return `<${this.num}>`;
  }

  [Symbol.toPrimitive](hint) {
    if (hint == "string")
      return `${this.num}`;
    else
      return this.num;
  }
}

module.exports = Number;
