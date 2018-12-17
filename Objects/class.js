// Advanced Objects & Prototypes
// ES-5 do not support classes; ES-6 supports classes

// Example 1
// var deck = []; // Array - consist of indexes, which can contain dictionaries
// var card = {}; // Dictionary - consists of keys and values, which can contain arrays

// card.name = 'hearts';
// card.point = 3;
// card.suit = 'hearts';
// card['name 1 space'] = 'hearts'; // Bracket notation is used versus dot notation because of spaces; 'name 1 space' is a key; NOT a variable
// console.log(card); // Print out for dot notation
// console.log(card['name 1 space']); // Print out for bracket notation

// Example 2
// var card = {
//     name: 'hearts',
//     point: 3,
//     suit: 'hearts',
// }

// console.log(card);

// Example 3 
// var deck = []; 
// var deck = newArray(); // This is the same as var deck = []; however, this is the longer version

// var card = {};
// var card = new Object(); // This is the same as var card = {}

// Example 4
// Functions are objects in JS
// function Course (title, instructor, level, published, views){
//     this.title = title;
//     this.instructor = instructor;
//     this.level = level;
//     this.published = published;
//     this.views = views;
// }

// // Two instances have been created below of the object above
// var Course1 = new Course ('Digital Crafts', 'Veronica', 1, true, 0);
// var Course2 = new Course ('Immersive', 'Azam', 1, true, 0);

// console.log(Course1.instructor)
// console.log(Course2.instructor)

// var courseCatalog = [
//     new Course ('Digital Crafts', 'Veronica', 1, true, 0),
//     new Course ('Immersive', 'Azam', 1, true, 0),
// ]

// console.log(courseCatalog);

// Example 5 - Deleting properties from an object

var characterSheet = {};
characterSheet['name'] = 'tim berners';
characterSheet['title'] = 'sir';
characterSheet['powers'] = 'invent the world';

// console.log(characterSheet);
// delete characterSheet['title'];
// console.log(characterSheet);

// Example 6 - For In  = used to loop through an object

for (var o in characterSheet){
    console.log(o + ": " + characterSheet[o]); // key with the value
    // console.log(characterSheet[o]);
}