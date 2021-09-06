var table = document.getElementsByTagName('table')[0];
var table1 = document.getElementsByTagName('tbody')[0];
var lastRow = document.getElementsByClassName('btn')[0];
var lastCol =  document.getElementsByClassName('button')[0];

var rows = document.getElementsByTagName('tr');
var row = rows[0];

lastRow.onclick = addRow;
lastRow.style.cursor = 'pointer';

addInputToAllTd()

function addInputToAllTd() {
    var td = table1.getElementsByTagName('td')
    for (var i = 0; i < td.length; i++) {
        var newInput = document.createElement('input')
        td[i].appendChild(newInput)
    }
}

function addRow(){
    var newRow = document.createElement('tr');
    for (var i = 0; i < 3; i++){
        var td = document.createElement('td');
        var input = document.createElement('input')
        td.appendChild(input)
        newRow.appendChild(td)
    }
    table1.insertBefore(newRow, lastRow);
}

table.addEventListener('click', activeInput);

function activeInput(event){
    if(event.target !== lastCol && event.target.localName === 'td') {
        console.log(event.target.localName)
        event.target.lastChild.focus()
    }
}