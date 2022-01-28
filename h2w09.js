function arrayFill(filler, num) {
    if ((typeof(filler) === "number" || typeof(filler) === "string" || typeof(filler) === "object" ||
    Array.isArray(filler)) && typeof(num) === "number") {
        
        var arr = new Array(num);
        arr.fill(filler,0,num);
        
    }
    else {
       throw new Error('Error - First argument is not a number/string/object/massive or second is not a number')
    }
    return arr;
}

console.log(arrayFill('ss',5));