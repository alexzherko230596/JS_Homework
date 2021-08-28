function areAnagrams(str, str1){ 
    if(str.length == str1.length){
    return str.split("").sort().join("") == str1.split("").sort().join("");
    }
    else return false;   
}

areAnagrams('кот', 'отк');