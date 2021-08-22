var initialObj = {
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

var clonedObj = deepClone({}, initialObj);

function deepClone(dest, obj){
    for(var k in obj){
        if((typeof obj[k]) == 'object'){
            dest[k] = deepClone({}, obj[k]);
        }
        else{
            dest[k] = obj[k];
        }
    }
    return dest;
}

clonedObj.object.object2.array2[1].name = 'Vasya';
// clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);