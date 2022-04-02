let arr = [1, 2, 3, 4];
console.log(arr);

const changer = function (number) {
return number + 3; 
}

let arr2 = arr.map(number => {number += 1
return number;
});
//OR

let arr3 = arr.map(number => number + 2);

//or?

let arr4 = arr.map(changer);
console.log(arr2);
console.log(arr3);
console.log(arr4);