var block = document.getElementById('container');
var newParagraph = document.createElement('p');
newParagraph.innerHTML = 
    '<p>There are so many symbols here ' +
    '<a href="https://www.google.ru/">Google</a> and ' + 
    '<a href="https://www.yahoo.com/">Yahoo!</a></p>';
block.appendChild(newParagraph);
var newParagraph2 = document.createElement('p');
newParagraph2.innerHTML = 
    '<p>There are so many russian symbols ' +
    '<a href="https://mail.ru/">Mail</a> and ' + 
    '<a href="https://yandex.ru/">Yandex</a></p>';
block.appendChild(newParagraph2);

var clickButtons = document.getElementsByTagName('button');
var clickButton = clickButtons[0];
var paragraphs = document.getElementsByTagName('p');
var paragraph = paragraphs[0];
clickButton.onclick = changeFontAndColor;

function changeFontAndColor(){
    
    var links = paragraph.getElementsByTagName('a');
    for(var k of links){
        k.style.color = 'red';
        k.style.fontWeight = '900';
    }
}

newParagraph2.addEventListener('click', alertShow);

function alertShow(event){
    var target = event.target;
    event.preventDefault()
    if(!localStorage.length) {
            localStorage.setItem(event.target.innerHTML, JSON.stringify({'path': target.href}));
            target.href = '#';
            alert('The information has successfully saved');
        }
    else {
        for (var i = 0; i < localStorage.length; i++){
                    if(localStorage.key(i) === event.target.innerHTML || localStorage.key(++i) === event.target.innerHTML){
                        // alert(target.href);
                        // alert(localStorage.getItem(localStorage.key(i)));
                        var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        alert(obj.path);
                        break;
                    }
                    else {
                        localStorage.setItem(event.target.innerHTML, JSON.stringify({'path': target.href}));
                        target.href = '#';
                        alert('The information has successfully saved1');
                        break;
                    }
        }
    }
}

window.localStorage.clear();