var arr = [1,2,3];

function reduce(arra, callback, acc) {
    if (Array.isArray(arra) && typeof(callback) === 'function' && (typeof(acc)) === 'number' || typeof(acc) === 'string') {
        var arr1 = arra.reduce(function callback(acc, currentValue, index, array) {return acc + currentValue;});
    }
    else {
       throw new Error('Error - First argument is not a massive or second is not a function or third is not number or string')
    }
    return arr1;
}

var pluss = reduce(arr, function(item, i, arr) {}, 0);
console.log('Summ of elements of massive are : ' + pluss);