var arr = [1,2,-3,1,5];

function some(arra, callback) {
    if (Array.isArray(arra) && typeof(callback) === 'function') {
        var arr1 = arra.some(function callback(currentValue, index, array) {return currentValue < 0;});
    }
    else {
        throw new Error('Error - First argument is not a massive or second is not a function')
    }
    return arr1;
}

var pluss = some(arr, function(item, i, arr) {});
console.log('Some elements of massive are negative: ' + pluss) ;