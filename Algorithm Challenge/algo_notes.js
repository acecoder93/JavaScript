
// String Example
// var myString = 'DigitalCrafts';

// var myArray = myString.split('');
// var reversed = myArray.reverse('');
// var reversed = reversed.join('');

// Solution below is optimized
// var myArray = myString.split('').reverse('').join('');
// console.log(myArray);


// Reverse String Method - "Of"

// function reverse(str){
//     let reverse = '';

//     for (let char of str){
//         reverse = char + reverse;
//     }
//     return reverse
// }
// console.log(reverse('hello'))

// Palindrone Example
// function palindrone(str){
//     let newString = str.split('');
    
//     if(newString.reverse().join('') == str){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(palindrone('hello'));

// Casting to become a string
// var i = 34;
// var i_string = i.toString();
// console.log(typeof(i_string));

// Character Maps - Max Chars
const myString =  "Digital Crafts"; 
const myCharMap = {};
let max = 0;
let maxChar = '';

for (let char of myString){
    if (!myCharMap[char]){
        myCharMap[char] = 1;
    } else{
        myCharMap[char]++;
    }
}
console.log(myCharMap);

for(let key in myCharMap){
    if(myCharMap[key] > max){
        //reset the variables
        max = myCharMap[key];
        maxChar = key;
    }
}

console.log(myCharMap);
console.log(max);
console.log(maxChar);