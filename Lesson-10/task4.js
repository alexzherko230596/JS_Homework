var str = 'Привет, студент! Студент... Как дела, студент?';

function numberOfWords(str){
    var str1 = str.split(/[\.!\?]+/);

    for(var k in str1){
        if(str1[k].length !== 0){
            str2 = str1[k].split(" ").join("");
            str3 = str2.split(",").join("");
            var sum = 0;
            for(var key in str3 ){
                sum += 1;
            }
            console.log(str1[k].trim() + ': Letters quantity is: '+ sum);
        }
    }
}

numberOfWords(str);