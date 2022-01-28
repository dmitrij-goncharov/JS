var arr = ['a','b','c','w'];

function reduceRight(arra, callback, acc) {
    if (Array.isArray(arra) && typeof(callback) === 'function' && (typeof(acc)) === 'number' || typeof(acc) === 'string') {
        var arr1 = arra.reduceRight(function callback(acc, currentValue, index, array) {return acc + currentValue;});
    }
    else {
       throw new Error('Error - First argument is not a massive or second is not a function or third is not number or string')
    }
    return arr1;
}

var pluss = reduceRight(arr, function(item, i, arr) {},'');
console.log('Summ of elements of massive are : ' + pluss);