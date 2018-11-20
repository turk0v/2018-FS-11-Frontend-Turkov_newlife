import shadowStyles from './shadow.css';
import menuButton from '../../../images/menu.png'

const template = `
	<style>${shadowStyles.toString()}</style>
	<div class="header-user">
		<img src="../public/icons/back_arrow.png" id="back_img">
		<img src="../public/icons/avatar.png" id="user_avatar">
	    <div class="senderInfo">
	        <div class="name">Jeniffer</div>
	        <div class="last_seen">was online just now</div>
	    </div>
    	<img src="../public/icons/menu.png" alt="Menu" id="menu_button">
    	<img src="../public/icons/search.png" alt="Search" id="search_button">
	</div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
	}

}
customElements.define('header-user', Header);

export default Header;