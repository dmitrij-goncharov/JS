const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];


function f(arra) {
    if (Array.isArray(arra)) {
        var newArra = arra.flat(Infinity);
        
        var sum = newArra.reduce(function callback(accumulator,currentValue) {
            if (typeof(currentValue) !== 'number') throw new Error('Element of massive is not a number');
            return accumulator + currentValue ;
        }, 0);  // 0 нужен как initialValue , если в массиве вообще не будет цифр
    }
    else {
        throw new Error('Error - Argument is not an array')
    }
    return sum;
}

var pluss = f(arr);
console.log('Summ elements of massive or nested massives are : ' + pluss) ;