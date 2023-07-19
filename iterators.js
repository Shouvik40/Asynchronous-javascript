//
// class fetchNextElement {
//   constructor(arr) {
//     this.arr = arr;
//     this.it = 0;
//   }
//   getNext() {
//     if (this.it === this.arr.length) return { next: undefined, done: true };
//     this.next = this.arr[this.it];
//     this.it++;
//     return { next: this.next, done: false };
//   }
// }

// let n = new fetchNextElement([1, 2]);
// console.log(n.getNext());
// console.log(n.getNext());
// console.log(n.getNext());

let fetchNextElement = {
  idx: 0,
  next: null,

  getNext: function (arr) {
    // console.log(arr, this.idx, this.next);
    if (this.idx === arr.length) return { next: undefined, done: true };
    this.next = arr[this.idx];
    this.idx++;

    return { next: this.next, done: false };
  },
};
console.log(fetchNextElement.getNext([1, 2]));
console.log(fetchNextElement.getNext([1, 2]));
console.log(fetchNextElement.getNext([1, 2, 3]));

// console.log(nextVal.next());
// console.log(nextVal.next());
// console.log(nextVal.next());
// console.log(nextVal.next());
// console.log(nextVal.next());
// console.log(nextVal.next());
// console.log(nextVal.next());
