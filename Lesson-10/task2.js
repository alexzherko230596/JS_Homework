var time = ['00' , '13', '24'];

var keyTime = time.reduce(function(string, date){

    return  string + ' : ' + date;
}, 'Current time');

keyTime;