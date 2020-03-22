const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.str.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if ( typeof position === "number" && position > 0 && position <= this.str.length ) {
      this.str.splice(position - 1, 1);
    } else {
      this.str = [];
      throw Error();   
    }
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    var res = this.str;
    this.str = [];
    return res.join("~~");
  }
};

module.exports = chainMaker; 