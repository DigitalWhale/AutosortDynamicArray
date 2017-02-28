'use strict';

let AArray = (typeSort) => { //typeSort: true - сортирвка по возрастанию, false - по убыванию
  this.array  = [];
  try {
      if (typeof (typeSort) == "function") {
          this.typeSort = typeSort;
      }
      else {
          this.typeSort = (a, b) => {
              if(a.toString() > b.toString()){
                  return true;
              }
              else {
                  return false;
              }
          };
      }
  }
};

//Сортировка элемента
AArray.prototype.sortInvert = (index) => {
    while(index != 0 && !this.typeSort(this.array[index], this.array[index-1])){
        let buffer = this.array[index];
        this.array[index] = this.array[index-1];
        this.array[index-1]=buffer;
        index--;
    }
};

AArray.prototype.sort = (index) => {
    while(index != 0 && this.typeSort()){
        let buffer = this.array[index];
        this.array[index] = this.array[index+1];
        this.array[index+1]=buffer;
        index++;
    }
};

//Добавление элемента
AArray.prototype.push = (element) => {
    this.array.push(element);
    this.sortInvert(this.array.length-1);
};

AArray.prototype.edit = (index, value) => {
  this.array[index] = value;
  if(this.typeSort(this.array[index], this.array[index+1])){
      this.sort(index);
  } else  if(this.typeSort(this.array[index-1], this.array[index])){
      this.sortInvert(index);
  }
};

AArray.prototype.increment = (index) => {
    this.array[index]++;
    if(this.typeSort(this.array[index], this.array[index+1])){
        this.sort(index);
    } else  if(this.typeSort(this.array[index-1], this.array[index])){
        this.sortInvert(index);
    }
};

AArray.prototype.decrement = (index) => {
    this.array[index]--;
    if(this.typeSort(this.array[index], this.array[index+1])){
        this.sort(index);
    } else  if(this.typeSort(this.array[index-1], this.array[index])){
        this.sortInvert(index);
    }
};

AArray.prototype.get = (index) => {
    return this.array[index];
};

AArray.prototype.getArr = () => {
    return this.array;
};

AArray.prototype.size = () => {
    return this.array.length;
};

AArray.prototype.clear = () => {
    this.arr = [];
};





