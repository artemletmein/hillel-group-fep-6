let example = [2, 'Bunny', ['Second Array'], {
    name: 'Alice',
    age: '42'
}];
///////////////////////////////////////////////////////////
Object.prototype.clone = function() {
    var newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i == 'clone')
            continue;
        if (this[i] && typeof this[i] == "object") {
            newObj[i] = this[i].clone();
        } else
            newObj[i] = this[i]
    }
    return newObj;
};
//////////////////////////////////////////////////////////
function copy(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            res[i] = copy(arr[i]);

            res[i] = arr[i].clone();
        } else {
            res[i] = arr[i];
        }
    }
    return res
};
copy(example);
let test = copy(example);
