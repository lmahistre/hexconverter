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
								<label className="short">{"Dec"}</label>
								<label className="long">{"Decimal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
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
								<label className="short">{"Hex"}</label>
								<label className="long">{"Hexadecimal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
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
								<label className="short">{"Bin"}</label>
								<label className="long">{"Binary"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
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
								<label className="short">{"Oct"}</label>
								<label className="long">{"Octal"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
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
								<label className="short">{"256"}</label>
								<label className="long">{"Base 256"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input
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
								<label className="short">{"ASCII"}</label>
								<label className="long">{"ASCII"}</label>
							</td>
							<td className="input">
								<div className="input-container">
									<input className="code" value={props.ascii} />
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
