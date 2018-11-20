import styles from './index.css';
import MessageForm from '../../lib/components/message-form';
import MessagesList from '../../lib/components/messages-list';
import Header from '../../lib/components/head'
import menuButton from '../../images/menu.png'

const header = new Header;
const messageForm = new MessageForm;
const messagesList = new MessagesList;

document.body.appendChild(header);
document.body.appendChild(messagesList);
document.body.appendChild(messageForm);

messageForm.addEventListener('new-message', function (event) {
	messagesList.addMessage(event.detail);
});

var menuImg = document.getElementById('menu');
menuImg.src = menuButton;
