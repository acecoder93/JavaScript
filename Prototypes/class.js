// Prototypes

// Example 1 

// Line 6 - a constructor function has been created
// var X = function(j) {
//     this.i = 0;
//     this.j = j;
//     };

// X.prototype.getJ = function(){
//     return this.j;
// }

// var x1 = new X(1);
// var x2 = new X(2);

// console.log(x1.getJ());
// console.log(x2.getJ());

// console.log(X);

// Example 2
var paul = {
    fname: 'Paul',
    lname: 'Bailey',
    greet: function(){
        console.log('Hello ${this.fname} ${this.lname}');
    }
    };

var shannon = {fname: 'Shannon'};

shannon.__proto__ = paul;

console.log(shannon.greet());