var arr = [-1,-2,-3,-1,-5];

function every(arra, callback) {
    if (Array.isArray(arra) && typeof(callback) === 'function') {
        var arr1 = arra.every(function callback(currentValue, index, array) {return currentValue < 0;});
    }
    else {
        throw new Error('Error - First argument is not a massive or second is not a function')
    }
    return arr1;
}

var pluss = every(arr, function(item, i, arr) {});
console.log('All elements of massive are negative: ' + pluss);