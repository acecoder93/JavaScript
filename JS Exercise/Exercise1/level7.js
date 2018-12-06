// Exercise 1 - Level 7

// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(number){
    emptyArray = [];

    for (var start = 0; start < number; start++) {
        emptyArray.push('string')
        console.log(emptyArray);
    }
}
finalFunction(3)


    // if (isNaN(a) == true){
    //     console.log('Please enter a number.');
    // } else if (isNaN(a) == false){
    //     var multiply = ('string' * a);
    //     emptyArray.push(multiply);
    //     console.log(emptyArray);
    // } else{
    //     console.log('Bye');
    // }

