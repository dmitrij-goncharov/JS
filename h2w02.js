var arr = [1,2,3,1,5];

function filter(arra, callback) {
    if (Array.isArray(arra) && typeof(callback) === 'function') {
        var arr1 = arra.filter(function callback(currentValue, index, array) {return currentValue >= 2;});
    }
    else {
        throw new Error('Error - First argument is not a massive or second is not a function')
    }
    return arr1
}

var pluss = filter(arr, function(item, i, arr) {});
console.log(pluss);