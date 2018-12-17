// Function Exercises

// Positive Numbers
// var arr = [-4. -3, -2, -1, 0, 1, 2, 3, 4];
// function positiveNumbers(arr){
//     return arr.filter(function(value){
//         return value > 0;
//     })
// }
// console.log(positiveNumbers(arr));

// Even Numbers
// var arr = [-4. -3, -2, -1, 0, 1, 2, 3, 4];
// function evenNumbers(arr){
//     return arr.filter(function(value){
//         return value % 2 == 0;
//     })
// }
// console.log(evenNumbers(arr));


// Square the Numbers
// var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
// function squareNumbers(arr){
//     return arr.map(function(value){
//         return value ** 2;
//     })
// }
// console.log(squareNumbers(arr));


// Cities 1
// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

// function cityTemp(cities){
//     return cities.filter(function(cities){
//             return cities.temperature < 70;
//     })
// }
// console.log(cityTemp(cities));

// Cities 2
// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

// function cityName(cities){
//     return cities.map(function(cities){
//         return cities.name;
//     })
// }
// console.log(cityName(cities));

// Good Job!
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function goodJob(people){
    return people.forEach(console.log('Good job ' + people + ' !'));
    }

goodJob(people);



// Good Job! --- Need to get on one line!
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var newArr = people.forEach(function(value){
//     console.log('Good Job ' + value + '!');
//     return value;
// })

// console.log(newArr);


// Sort an Array
// var strings = ['cat', 'dog', 'mouse', 'lion', 'bear', 'zebra'];
// function sortString(order){
//     return strings.sort();
// }
// console.log(sortString(strings));

// Sort an Array 2
// var strings = ['cat', 'dog', 'mouse', 'lion', 'bear', 'zebra','bee'];
// function sortString(order){
//     return strings.sort(function(a,b){
//         return a.length - b.length;
//     });
// }
// console.log(sortString(strings));

// Set an Array 3
// var arr = [ 
//     [1, 3, 4], 
//     [2, 4, 6, 8], 
//     [3, 6] ];







// Acronym
// var p = ['very', 'important', 'person'];
// var q = ['national', 'aeroneautics', 'space', 'administration'];

// function acronym(arr){
//     var p = arr.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue[0].toUpperCase()
//     }, "");
//     return p
// }
// console.log(acronym(p));
// console.log(acronym(q));


