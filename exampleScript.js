'use strict';

let arr = [{name: "lol1", val: 1}, {name: "lol2", val: 4}, {name: "lol3", val: 3}, {name: "lol4", val: 1}, {name: "lol5", val: 6}, {name: "lol6", val: 4}, {name: "lol7", val: 1}, {name: "lol8", val: 8}, {name: "lol9", val: 10}];
let darr = new AArray((a, b) => { //D rjycnhern
    if(a["val"] > b["val"]){
        return true;
    }
    else {
        return false;
    }
});
for(let i = 0; i < arr.length; i++){
    darr.push(arr[i]);
}
for(let i = 0; i <  darr.size(); i++){
    console.log(darr.get(i))
}

console.log("incr");

darr.edit(6, 1 , "val");

for(let i = 0; i <  darr.size(); i++){
    console.log(darr.get(i))
}

