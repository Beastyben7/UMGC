//Sending a new message
const sendMessageBtn = document.getElementById('sendMessage');
const messages = document.getElementById('messages');
const textToSend = document.getElementById('textToSend');

function sendMessage() {
    let txt = document.getElementById('textToSend').value;

    let newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.classList.add('sent');
    
        let msg = document.createElement('div');
        msg.classList.add('msg');
        msg.textContent = txt;
        newMessage.appendChild(msg);

        let dateAndTimeSent = document.createElement('div');
        dateAndTimeSent.classList.add('dateAndTimeSent');
        dateAndTimeSent.textContent = 'now'
        newMessage.appendChild(dateAndTimeSent)

    if (textToSend.value !== '') {
        messages.appendChild(newMessage);
        textToSend.value = '';
    }
};

sendMessageBtn.addEventListener('click', sendMessage);
textToSend.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
//--------------------

//Contact Object Structure (I did not use this)
const contact = {    
    1: {
        name: `Veronica Baylee`,
        profilePhoto: new URL(`imgs/contacts/contact1.jpg`),
        message: {
            1: {
                sender: `them`,
                content: `message content lorem ipsum`,
            },
            2: {
                sender: `you`,
                content: `message content lorem ipsum`,
            },
        },
    },
    2: {
        name: `Veronica Baylee`,
        profilePhoto: new URL(`imgs/contacts/contact2.jpg`),
        message: {
            1: {
                sender: `them`,
                content: `message content lorem ipsum`,
            },
            2: {
                sender: `you`,
                content: `message content lorem ipsum`,
            },
        },
    },
};
//--------------------
