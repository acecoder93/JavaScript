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

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
    var array = [];
    while (array.length < 10){
        array.push('hello');
        console.log(array)
    }
}
lvl6exercise2()

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while (array.length > 0){
        array.pop();
        console.log(array);
    }
}
lvl6exercise3()