console.log('main.js is working');


var content = document.getElementById("content");
var input = document.getElementById("input");
var button = document.getElementById("input-button");


var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


var chatHistory = [
    {
        class: "received",
        text: "Hi! How are you?",
        time: "09.01"
    },
    
    {
        class: "sent",
        text: "Hi! How are you?",
        time: "09.01"
    },
    
    {
        class: "received",
        text: "Hi! How are you?",
        time: "09.01"
    }
];



/* FUNCTIONS */
function printMessage(messageObject) {
    content.innerHTML += template(messageObject);
    content.lastElementChild.scrollIntoView(false);
}


function printHistory() {
    chatHistory.forEach(message => printMessage(message));
}


function formatMessage(sender, text) {
    var now = new Date;
    return {
        class: sender,
        text: text,
        time: (now.getHours() + '.' + now.getMinutes()).replace(/\b([\d])\b/, '0$&')
    }
}


function sendingBot() {
    setTimeout(() => {
        printMessage(formatMessage('received', 'Hello!'))
    },
    1000);
}


function sendingUser() {
    if (input.value.trim()) {
        printMessage(formatMessage('sent', input.value.trim()));
        sendingBot();
    }

    input.value = '';
    document.activeElement.blur();
}



/* MAIN SCRIPT */
printHistory();

button.addEventListener('click', sendingUser);
document.addEventListener('keyup', e => {
    if (e.which == 13 || e.keyCode == 13) sendingUser();
});
