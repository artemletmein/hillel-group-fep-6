/////////////////////////////////////////////////////////////////////////////
let str = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
/////////////////////////////////////////////////////////////////////////////
function buildAstring1(arr, n) {
  let x = [];
    arr.forEach(function(i) {
        console.log(i.length <= n);
        if (i.length > n) {
          x.push(i);
        }
    });
    console.log(x);
    return str = x;
}
buildAstring1(str, 3);
////////////////////////////////////////////////////////////////////////////
function buildAstring2(arr, n) {
  let x = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
          x.push(arr[i])
        }
    };
    console.log(x)
    return x;
};
buildAstring2(str, 3);
