/////////////////////////////////////////////////////////////////////////////
let str = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
/////VARIANT #1//////////////////////////////////////////////////////////////
function buildAstring1(arr, n) {
  let x = [];
    arr.forEach(function(i) {
        if (i.length > n) {
          x.push(i);
        }
    });
    return str = x;
}
buildAstring1(str, 3);
/////VARIANT #1////////////////////////////////////////////////////////////
function buildAstring2(arr, n) {
  let x = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
          x.push(arr[i])
        }
    };
    return x;
};
buildAstring2(str, 3);
