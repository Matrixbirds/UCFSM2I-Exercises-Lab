class Multiply {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  get inspect() {
    return `<${this}>`
  }

  [Symbol.toPrimitive](hint) {
    if (hint == "string")
      return `${this.left} * ${this.right}`;
    else
      return +this.left * this.right;
  }
}

module.exports = Multiply;