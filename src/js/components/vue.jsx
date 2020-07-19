const React = require('react');

class Vue extends React.Component {
	constructor (props) {
		super();
		this.decimalRef = React.createRef();
	}

	componentDidMount () {
		this.decimalRef.current.focus();
	}

	render () {
		const props = this.props;
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td className="label" title={"Decimal"}>
								<label for="decimal" className="short">{"Dec"}</label>
								<label for="decimal" className="long">{"Decimal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="decimal"
										name="decimal"
										placeholder={"Decimal"}
										className="large"
										onChange={props.handleChange}
										value={props.decimal}
										ref={this.decimalRef}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label" title={"Hexadecimal"}>
								<label for="hexadecimal" className="short">{"Hex"}</label>
								<label for="hexadecimal" className="long">{"Hexadecimal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="hexadecimal"
										name="hexadecimal"
										placeholder={"Hexadecimal"}
										className="large"
										onChange={props.handleChange}
										value={props.hexadecimal}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label" title={"Binary"}>
								<label for="binary" className="short">{"Bin"}</label>
								<label for="binary" className="long">{"Binary"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="binary"
										name="binary"
										placeholder={"Binary"}
										className="large"
										onChange={props.handleChange}
										value={props.binary}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label" title={"Octal"}>
								<label for="octal" className="short">{"Oct"}</label>
								<label for="octal" className="long">{"Octal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="octal"
										name="octal"
										placeholder={"Octal"}
										className="large"
										onChange={props.handleChange}
										value={props.octal}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label" title={"Base 256"}>
								<label for="base256" className="short">{"256"}</label>
								<label for="base256" className="long">{"Base 256"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="base256"
										name="base256"
										placeholder={"Base 256 / RGB"}
										className="large"
										onChange={props.handleChange}
										value={props.base256}
									/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label">
								<label className="short">{"Color"}</label>
								<label className="long">{"Color"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<div id="color_name" className="medium">{props.colorName}</div>
									<div
										className="color-indicator"
										style={ props.color ? {
											backgroundColor : '#'+props.color,
										} : {} }
									>&nbsp;</div>
								</div>
							</td>
						</tr>
						<tr>
							<td className="label">
								<label for="ascii" className="short">{"ASCII"}</label>
								<label for="ascii" className="long">{"ASCII"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
										id="ascii"
										name="ascii"
										placeholder="ASCII"
										className="code"
										value={props.ascii}
										onChange={props.handleChange}
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				{ props.showNewWindow ?
					<div className="actions">
						<a href="#"
							id="link_new_window"
							className="action"
							title={"New window"}
							onClick={props.openNewWindow}
						>
							<img src="img/new_window.png" alt="New window" />
						</a>
						<div className="clearfix"></div>
					</div>
				: null }
			</div>
		);
	}
}

module.exports = Vue;
