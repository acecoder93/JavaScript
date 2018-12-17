//  Challenge 1
function conjecture(num){
    while (num != 1){
        if (num % 2 == 0){
            num = (num / 2);
            console.log(num + " ");
        } else {  
            num = ((num * 3) + 1);
            console.log(num + " ");
        }
    }
}
conjecture(23)

// Challenge 2
// function palindrome(a,b){
//     var reversed = "";
//     var product = a * b;
//     for (var i = product.length - 1; i >=0; i--){
//         reversed += str[i];
//     }
//     return reversed;
//     console.log(reversed)
// }
// console.log(palindrome ('537', '123'));


// Challenge 3

function divisible(num){
    for (var x = 1; x < 20, x ++ ){
        if (num % x == 0){
            return true;
        } else (
            console.log('You Suck!');
        )
    }
}
console.log(divisible(2520));