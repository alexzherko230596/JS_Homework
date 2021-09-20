var input1 = document.getElementById('x');
var input2 = document.getElementById('y');
var button = document.getElementsByTagName('button')[0];

input1.addEventListener('keyup', checkParam);
input2.addEventListener('keyup', checkParam);

function checkParam(){
    if(input1.value.length != 0 && input2.value.length != 0){
        button.removeAttribute('disabled');
    }
    else{
        if (!button.hasAttribute('disabled')){
                button.disabled = true;
        }
    }
}

button.addEventListener('click', valueParam);

function valueParam(){
    var num1 = +input1.value;
    var num2 = +input2.value;
    if((num1 >= 1 && num1<= 10) && (num2 >= 1 && num2<= 10)){
            if((num1 ^ 0) == num1 && (num2 ^ 0) == num2){
            drawChess(num1, num2)
        }
        else{
            alert('Your numbers are not integer');
            clear();
        }
    }
    else {
        alert('Input only integer from 1 to 10');
        clear();
    }
}

function clear(){
    input1.value = null;
    input2.value = null;
    button.disabled = true;
}

function drawChess(x,y){
    clear();
    if(document.getElementById('tbl')){
        document.getElementById('tbl').remove();
    }
    var body = document.body,
        tbl  = document.createElement('table');
    for(var i = 0; i < y; i++){
        var tr = document.createElement('tr');
        tbl.appendChild(tr)
        if(i % 2 == 0){
            for(var j = 0; j < x; j++){
                var td = document.createElement('td')
                if(j % 2 == 0){
                    td.classList.add('black')
                }
                else{
                    td.classList.add('white')
                }
                tr.appendChild(td);
            }
        }
        else{
            for(var j = 0; j < x; j++){
                var td = document.createElement('td')
                if(j % 2 == 0){
                    td.classList.add('white')
                }
                else{
                    td.classList.add('black')
                }
                tr.appendChild(td);
            }
        }
        
    }
    body.appendChild(tbl);
    tbl.setAttribute('id', 'tbl')
    tbl.addEventListener('click', changeColor);
}    

function changeColor(event){
    var target = event.target;
    if(target.tagName === 'TD'){
        var allTd = document.getElementsByTagName('td');
        for(var i =0; i< allTd.length; i++){
                if(allTd[i].classList.contains('white')){
                    allTd[i].classList.remove('white');
                    allTd[i].classList.add('black');
                }
                else{
                    allTd[i].classList.remove('black');
                    allTd[i].classList.add('white');
                }
            }
    }
}
