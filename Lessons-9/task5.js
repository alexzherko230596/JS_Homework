var arr = [1,2,3,4,5,6,7];
var sub = [];
function slised(arr, number){
    while(arr.length > 0){
        sub.push(arr.splice(0, number));
    }

    return sub;
}

slised(arr, 2);
console.log(sub);