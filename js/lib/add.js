class Add {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  reduce() {
    return +this.left + this.right;
  }

  get inspect() {
    return `<${this}>`;
  }

  [Symbol.toPrimitive](hint) {
    if (hint == "string")
      return `${this.left} + ${this.right}`;
    else
      return +this.left + this.right;
  }

}
module.exports = Add;
