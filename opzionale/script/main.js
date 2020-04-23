console.log('main.js is working');


var content = document.getElementById("content");
var input = document.getElementById("input");
var button = document.getElementById("input-button");


var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


/* FUNCTIONS */
function printMess(message, sender) {
    var now = new Date();

    var context = {
        class:  sender,
        text: message,
        time: (now.getHours() + '.' + now.getMinutes()).replace(/\b([\d])\b/, '0$&')
    };

    content.innerHTML += template(context);
    content.lastElementChild.scrollIntoView(false)
}


function sendingBot() {
    setTimeout(() => {
        printMess('Hello!', 'received')
    },
    1000);
}


function sendUser() {
    if (input.value) {
        printMess(input.value, 'sent');
        sendingBot();
    }

    input.value = '';
    document.activeElement.blur();
}


/* MAIN SCRIPT */
button.addEventListener('click', sendUser);
document.addEventListener('keyup', function(e) {
    if (e.which == 13 || e.keyCode == 13) sendUser()
});