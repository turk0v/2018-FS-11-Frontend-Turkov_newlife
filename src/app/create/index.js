import styles from './index.css';
import MessageForm from '../../lib/components/message-form';
import MessagesList from '../../lib/components/messages-list';
import Header from '../../lib/components/head'
import menuButton from '../../images/menu.png'
import searchButton from '../../images/search.png'
import arrow from '../../images/back_arrow.png'
import avatar from '../../images/avatar.png'

const header = new Header;
const messageForm = new MessageForm;
const messagesList = new MessagesList;

document.body.appendChild(header);
document.body.appendChild(messagesList);
document.body.appendChild(messageForm);

messageForm.addEventListener('new-message', function (event) {
	messagesList.addMessage(event.detail);
});

