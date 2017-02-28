'use strict';

function AArray(typeSort){ //typeSort: true - сортирвка по возрастанию, false - по убыванию
  this.array  = [];
   if (typeof (typeSort) == "function") {
       this.typeSort = typeSort;
   }
   else {
       this.typeSort = function(a, b){
           if(a.toString() > b.toString()){
               return true;
           }
           else {
               return false;
           }
       };
   }

};

//Сортировка элемента
AArray.prototype.sortInvert = function(index){
    while(index != 0 && !this.typeSort(this.array[index], this.array[index-1])){
        let buffer = this.array[index];
        this.array[index] = this.array[index-1];
        this.array[index-1]=buffer;
        index--;
    }
};

AArray.prototype.sort = function(index){
    while(index != this.array.length-1 && this.typeSort(this.array[index], this.array[index+1])){
        let buffer = this.array[index];
        this.array[index] = this.array[index+1];
        this.array[index+1]=buffer;
        index++;
    }
};

//Добавление элемента
AArray.prototype.push = function(element){
    this.array.push(element);
    this.sortInvert(this.array.length-1);
};

AArray.prototype.edit = function(index, value, pole){
    if(pole === null) {
        this.array[index] = value;
    }
    else {
        this.array[index][pole] = value;
    }
  if(this.typeSort(this.array[index], this.array[index+1])){
      this.sort(index);
  } else  if(this.typeSort(this.array[index-1], this.array[index])){
      this.sortInvert(index);
  }
};

AArray.prototype.get = function(index){
    return this.array[index];
};

AArray.prototype.getArr = function(){
    return this.array;
};

AArray.prototype.size = function(){
    return this.array.length;
};

AArray.prototype.clear = function(){
    this.arr = [];
};





