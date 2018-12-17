// // Destructuring Objects

// var obj = {
//     x: 5,
//     y: 20,
//     z: 3,
// }

// // console.log(mult(obj)); = 300

// // function mult(object){
// //     let {x, y, z} = object;
// //     //var x = object.x; this is the same as what is mentioned on line 12
// //     //var y = object.y;
// //     //var z = object.z;

// //     return x * y * z;
// // }

// // console.log(mult(obj));

// // Arrow Function Practice
// // ES5 Syntax - 
// // let x = [1, 2, 3, 4];
// // let y = x.map(function(index){
// //     return index + 1
// // })
// // console.log(y);

// //ES6 Syntax
// // let x = [1, 2, 3, 4];
// // let y = x.map((index)=> index + 1);
// // console.log(y);

// // This
// // function getType() {
// //     console.log('Type is: ' + this.type);
// // }
// // getType();

// // Args
// // Function below is utilizng a spread operator
// // ES5 Syntax
// function sum(...args){
//     let args = [1,3];

//     let a = [1, 2, 3];
//     let total;

//     total = args.reduce(function(acc, elem){
//         return acc + elem
//     }, 0)
//     return total;

// }
// console.log(sum(1,3));
// console.log(sum(1,4, 5));
// console.log(sum(2, 3, 4, 5));

// // ES6 Syntax

// let sum = (...args) => {
//     let total;
// // the '0' in line 65 is the initial value of the accumulator
//     total = args.reduce((acc, elem))=> acc + elem, 0);
//     return total;
// }

// console.log(sum(1,3));
// console.log(sum(1,4, 5));
// console.log(sum(2, 3, 4, 5));


// Ternary Operator - further research

// Array Objects
// var count  = 0;
// var vowels = ['a', 'e', 'i', 'o', 'u'];

// var str = 'This is an awesome day!';

// Question: Find vowels in string above

// for (let i = 0; i < str.length; i++){
//     if (vowels.indexOf(str[i]) !== -1) count ++;
// }
// console.log(count);
// ES6 syntax 
var count  = 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];

var str = 'This is an awesome day!';

for (let s of str){
    //console.log(s)
    if (vowels.includes(s)){
        count ++;
    }
}
console.log(count);