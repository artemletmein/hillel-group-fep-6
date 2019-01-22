let example = [2, 'Bunny', ['Second Array'], {
    name: 'Alice',
    age: '42'
},['Movie', {
    city: 'London',
    adress: 'Tatarstan street, 10'
}]];
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
let test = example.clone();
