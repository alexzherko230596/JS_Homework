var text = 'run forest, run';

function counting(str){
    var sym = 0;
    var vowels = ['a', 'o', 'u', 'i', 'e'];
    str = str.toLowerCase().split('');
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j <= vowels.length; j++){
            if (str[i] == vowels[j]) sym += 1; 
        }
    }
    return sym;
} 

counting(text);