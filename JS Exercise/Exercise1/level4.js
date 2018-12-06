// Exercise 1 - Level 4

function lvl4exercise1() {
	// Return the boolean value "true"
    var boolean = true;
    console.log(boolean);
}
lvl4exercise1()

function lvl4exercise2() {
	// Return the boolean value "false"
    var boolean =  false;
    console.log(boolean);
}
lvl4exercise2()

function lvl4exercise3(bool) {
    // Return the opposite of the input boolean value
    var test = !bool;
    console.log(test);
}
lvl4exercise3(false)

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
    var test = bool1 && bool2;
    console.log(test);
}
lvl4exercise4(false, true)

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
    var test = bool1 || bool2;
    console.log(test);
}
lvl4exercise5(true,false)

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
    var test = bool1 == bool2;
    console.log(test);
}
lvl4exercise6(false,false)