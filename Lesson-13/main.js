var button = document.getElementsByTagName('button')[0];
var userTabs = document.getElementsByClassName('users-tabs')[0];
var userList = [];

button.addEventListener('click', sendResponse);

function sendResponse(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.send();

    xhr.onload = function() {
        var statusType = Math.round(this.status / 100);

        if(statusType === 2){
            userList = JSON.parse(this.response).data;
            drawUsers(userList);
        }
    };

    xhr.onerror = function() {
        var alertMistake = document.getElementsByClassName('ajax_error')[0];
        alertMistake.classList.add('ajax_error_active');
    }
}

function drawUsers(arr){
    button.disabled = true;
    for(var i = 1; i < arr.length + 1; i++){
        var block = document.createElement('div');
        block.classList.add('user');
        block.id = i - 1;
        block.innerText = 'User ' + i;
        userTabs.appendChild(block); 
    }

    drawElements();
    showUser(arr[0]);
}

function drawElements(){
    var info = document.getElementsByClassName('info-block')[0];
    info.classList.add('info-block_active');
    var user1 = document.getElementsByClassName('user')[0];
    user1.classList.add('user_active');
    var img = document.createElement('img');
    img.id = 'avatar';
    var name = document.createElement('div');
    name.id = 'name';
    name.classList.add('name');
    var surname = document.createElement('div');
    surname.classList.add('surname');
    surname.id = 'surname';
    info.appendChild(img);
    info.appendChild(name);
    info.appendChild(surname);
}


userTabs.addEventListener('click', changeActiveUser);

function changeActiveUser(){
    var arr = document.getElementsByClassName('user');
    var target = event.target;
    if(target.className == 'user'){
        for(var i = 0; i < arr.length; i++ ){
            arr[i].classList.remove('user_active');
        }
        target.classList.add('user_active');
        showUser(userList[target.id]);
    }
}

function showUser(arr){
    var img = document.getElementById('avatar');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');

    img.setAttribute('src', arr.avatar);
    name.innerHTML = 'First Name: ' + arr['first_name'];
    surname.innerHTML = 'Last Name: ' + arr['last_name'];

}
