class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items[pos] == undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  } 

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
     return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
     return Math.min(...this.items);
    }
  }
  // Should work
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
     return this.items.reduce((sum, num) => sum + num, 0);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((sum, num) => sum + num, 0) / this.length;
    }
  }
}

module.exports = SortedList;