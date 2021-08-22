var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function compare(a, b){
    var checkObj = typeof a === 'object' && typeof b === 'object';
    var notNull = a !== null && b !== null;

    if (checkObj && notNull){

        for (var k in a){
            switch (typeof (a[k])) {
                case 'object':
                    if (!compare(a[k], b[k])) return false;
                    break;
                case 'function':
                    if (typeof (b[k]) !== 'function' || (a[k].toString() != b[k].toString())) return false;
                    break;
                default:
                    if (a[k] != b[k]) return false;
            }
        }

        return true;
    }
    else return a === b;
}

console.log(compare(a,b));