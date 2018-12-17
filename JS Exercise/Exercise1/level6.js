// Exercise 1 - Level 6

function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
    var a = num
	if (a == 1){
        console.log('hello');
    } else if (a == 2){
        console.log('world');
    } else{
        console.log('bye')
    }
}
lvl6exercise1(2)
// if returning value in function, call function and print by "console.log(lvl6exercise1(2))
// Below is an example to complete the above exercise by using a switch statement
var x;
switch (num){
    case 1:
        x = 'hello';
        break;
    case 2:
        x = 'world';
        break;
    default:
        x ='bye';
        break;
}

return 6



function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
    var array = [];
    while (array.length < 10){
        array.push('hello');
        console.log(array)
    }
}

lvl6exercise2()

//  For-Loop version of above exercise
function exercisetype2(){
    var array = [];
    for (var i = 0; i < 1, i++){
        array.push('hello');
    }
}
console.log(exercisetype2())


function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while (array.length > 0){
        array.pop();
        console.log(array);
    }
}
lvl6exercise3()