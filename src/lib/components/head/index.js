import shadowStyles from './shadow.css';

const template = `
	<style>${shadowStyles.toString()}</style>
	<div class="header-user">
	    <div class="senderInfo">
	        <div class="name">Jeniffer</div>
	        <div class="last_seen">was online just now</div>
	    </div>
    	<img id="menu" src=""/>
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