class Sorter {
  constructor() {
    this.arr = [];
      
    this.compare = (a, b) =>{
         return a - b;        
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      let tempArr = [];
      for(let i = 0; i < indices.length; i++){
          tempArr.push(this.arr[indices[i]]);
      }
      tempArr.sort(this.compare);
      indices.sort( (a, b) => {
            return a - b;
      });
      for(let i = 0; i < indices.length; i++){
          this.arr[indices[i]] = tempArr[i];
      }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;