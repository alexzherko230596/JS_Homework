var table = document.getElementsByTagName('table')[0];
var table1 = document.getElementsByTagName('tbody')[0];
var lastRow = document.getElementsByClassName('btn')[0];
var lastCol =  document.getElementsByClassName('button')[0];

var rows = document.getElementsByTagName('tr');
var row = rows[0];

table1.addEventListener('click', tdHandler);
function tdHandler(){
    var target = event.target;
    if(target.tagName === 'TD'){
        if(target.id === lastCol){
            var newRow = document.createElement('tr'),
                firstRow = table1.firstElementChild;

            newRow.innerHTML = '<td></td><td></td><td></td>'
            table1.insertBefore(newRow, firstRow);
        }
        else{
            var text = target.innerText;
            target.innerHTML = '<input type="text">';
            var input = table1.getElementsByTagName('input')[0];
            input.focus();
            input.value = text;
            input.onblur = setText;
        }
    }
}

function setText(){
    var target = event.currentTarget;
    target.parentNode.innerHTML = target.value;
}

table1.onkeypress = function(){
    (event.key === 'Enter') && table1.getElementsByTagName('input')[0].blur();
}