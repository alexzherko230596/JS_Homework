var arr = [1,2,3,4,5,6,7];
function slised(arr, number){
    var sub = [];
    while(arr.length > 0){
        sub.push(arr.splice(0, number));
    }

    return console.log(sub);
}

slised(arr, 2);