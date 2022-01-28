var arr = [1,2,3,4,5];


function reverse(arra) {
    
    if (Array.isArray(arra)) {
        if (arra.length === 0)  throw new Error('Massive can not be empty');
        
        arra.reverse() ;
        
    }
    else {
       throw new Error('Error - argument is not a massive')
    }
    return arra;
}

console.log(reverse(arr));

