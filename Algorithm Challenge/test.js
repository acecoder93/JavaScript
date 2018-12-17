// function conjecture(num){
//    var newVar = function(num){
//     while (num != 1){
//     if (num % 2 == 0){
//         while (num != 1){
//             return (num/2)
//         }
//     } else if (num % 2 != 0){
//         while (num != 1){
//             return ((num * 3 + 1));
//         }
//     }}
// console.log(conjecture(5));



function conjecture(num){
    while ( num != 1){
        while (num % 2 == 0){
            num =  (num / 2)
            return num
          
        }
    }
}
console.log(conjecture(4));
