// Anonymous Functions & CallBacks


// var greet = function(name){
//     return 'hello ' + name;
// }

// console.log(greeting('Shoba')); <--- used to call function

// console.log(greet('Anuj')); // <--- used to call the variable, if this is the case, you can remove the name of the function 
// by saving it as a variable, this allows the functions to pass into other functions



// var add  = function(num1, num2){
//     return num1 + num2;
// }
// console.log(add (3,4));

// var subtract = function(num1, num2){
//     return num1 - num2;
// }
// console.log(subtract(5,3))


// // using two functions above to create an operation (add and subtrat function)
// var calc = function(num1, num2, operation){
//     return operation(num1, num2); // based on operator's parameters that are needed to execute the particular function
// }
// console.log(calc(3,4,add));



// Array.forEach() <-- will allow you to iterate the array without using a for loop; this will NOT create a new array
// var array = [11, 12, 13, 14, 15, 16];

// array.forEach(function(value, index){
//     console.log(value + ' ' + index)
// })

//Array.Map() <-- allows you to modify the values within an array, this will return the same length with different value
// var arr = [4, 7, 2, 3, 9, 0];
// var i = 0;

// var newArray = arr.map(function(value){
//     return value * 2
// })
// console.log(newArray)

//Array.filter() <-- iterates over your array as True or False for elements that you want, this will affact the length of the element
// var arr = [4, 7, 2, 3, 9, 0];

// var newArray = arr.filter(function(value){
//     return value > 3;
// })
// console.log(newArray);


// Array.some() <-- all user gets back is, "true" or "false" (boolean)
// Note: this stops at first value and gives back answer based on first identified (true would be result if "value > 0" was being tested, at index[0] - value 4)
// var arr = [4, 7, 2, 3, 9, 0];
// var result = arr.some(function(value){
//     console.log(value);
//     return value < 0;
// })
// console.log(result);

// Array.reduce()

