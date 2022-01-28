var arr = [1,2,3];

function forEach(arra, callback) {
    if (Array.isArray(arra) && typeof(callback) === 'function') {
        arra.forEach(function callback(currentValue, index, array) {console.log(currentValue);});
    }
    else {
        throw new Error('Error - First argument is not a massive or second is not a function')
    }
}

forEach(arr, function(item, i, arr) {});