var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
var tmp =0;

while (razSorted != 0) {
    var razSorted =0;
    for (var i=1; i<arr.length; i++) {
        if (arr[i-1] < arr[i]) {
           tmp = arr[i-1];
           arr[i-1] = arr[i];
           arr[i] = tmp;
           razSorted++;
       }
    }
}

for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
