var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = arr.map(function(val) {
    return val.length; 
});
//for (var i = 0; i < arr.length; i++) {
//arrLength[i] = arr[i].length;
//}

console.log( arrLength ); // 4,5,2,3