import shadowStyles from './shadow.css'
const template = `
<style>${shadowStyles.toString()}</style>
<div id="drop-area">hi,</div>
`;


// will finish it in react
class DragNDrop extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._events = {
			ondragover:'ondragover',
			ondragenter:'ondragenter',
			ondragleave:'ondragleave',
			ondrop:'ondrop',
		};
		this.preventDefaultDrag();
	}


	preventDefaultDrag() {
		console.log(this._events.ondragover)
	}
}

	// addHandler() {
	// 	this._elements.input.addEventListener('drop', (event) => {
	// 		var fileEvent = new Event('drop');
	// 		this.dispatchEvent(fileEvent);
	// 	});
	// }
