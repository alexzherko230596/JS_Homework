var table = document.getElementsByTagName('table')[0];
var table1 = document.getElementsByTagName('tbody')[0];
var lastRow = document.getElementsByClassName('btn')[0];
var lastCol =  document.getElementsByClassName('button')[0];

var rows = document.getElementsByTagName('tr');
var row = rows[0];

lastRow.onclick = addRow;
lastRow.style.cursor = 'pointer';

function addRow(){
    var newRow = document.createElement('tr');
    for (var i = 0; i < 3; i++){
        var td = document.createElement('td');
        newRow.appendChild(td)
    }
    table1.insertBefore(newRow, lastRow);
}

table.addEventListener('click', activeInput);

function activeInput(event){
    if(event.target !== lastCol) {
        var input = document.createElement('input');
        // var input = document.createElement('input');
        input.focus();
        input.style.width = '99%' ;
        input.style.height = '98%' ;

        input.value = event.target.innerHTML;
        event.target.innerHTML = '';
        event.target.appendChild(input); 
    }
}