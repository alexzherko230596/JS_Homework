var str = 'шалаШ';

function isPalyndrom(str){
    var str1 = str.split('').reverse().join('');
    return str.toLowerCase() == str1.toLowerCase();
}
isPalyndrom(str);