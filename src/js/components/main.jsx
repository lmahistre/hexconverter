const React = require('react');

const compute = require('../services/compute.js');
const colorsByCode = require('../services/colors.js');

const Vue = require('./vue.jsx');

class Main extends React.Component {

	constructor (props) {
		super();
		if (props.hexadecimal) {
			this.state = compute(props.hexadecimal, 'hexadecimal');
		}
		else {
			this.state = {
				base256: null,
				binary: null,
				decimal: null,
				hexadecimal : null,
				octal : null,
				color : null,
				colorName : null,
			}
		}
		this.showNewWindow = location.href.indexOf('#') === -1 && 'undefined' !== typeof browser;
	}


	handleChange (event) {
		const origin = event.target.attributes.id.value;
		const inputValue = event.target.value;
		this.setState(compute(inputValue, origin));
	}


	openNewWindow (event) {
		try {
			const creating = browser.windows.create({
				height : 260,
				width : 340,
				url : 'index.html#'+this.state.hexadecimal,
				type : 'popup',
			});
		}
		catch (error) {
			alert(error.message);
		}
	}


	render () {
		return <Vue
			handleChange={this.handleChange.bind(this)}
			decimal={this.state.decimal}
			hexadecimal={this.state.hexadecimal}
			binary={this.state.binary}
			octal={this.state.octal}
			base256={this.state.base256}
			colorName={this.state.colorName}
			color={this.state.color}
			openNewWindow={this.openNewWindow.bind(this)}
			showNewWindow={this.showNewWindow}
		/>;
	}
}

module.exports = Main;