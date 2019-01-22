let str = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function buildAstring(arr, n) {
    arr.forEach(function(i) {
        console.log(i.length < n);
        if (i.length < n) {

        } else {

        }
    })
    return arr;
}
buildAstring(str, 5);
