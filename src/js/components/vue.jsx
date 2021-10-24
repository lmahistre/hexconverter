import React from 'react';

export default function Vue({
	ascii,
	base256,
	binary,
	color,
	colorName,
	decimal,
	handleChange,
	hexadecimal,
	octal,
	openNewWindow,
	showNewWindow,
}) {
	const decimalRef = React.createRef();

	React.useEffect(function() {
		decimalRef.current.focus();
	}, []);

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td className="label" title="Decimal">
							<label htmlFor="decimal" className="short">Dec</label>
							<label htmlFor="decimal" className="long">Decimal</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="decimal"
									name="decimal"
									placeholder="Decimal"
									className="large"
									onChange={handleChange}
									value={decimal}
									ref={decimalRef}
								/>
							</div>
						</td>
					</tr>
					<tr>
						<td className="label" title={"Hexadecimal"}>
							<label htmlFor="hexadecimal" className="short">{"Hex"}</label>
							<label htmlFor="hexadecimal" className="long">{"Hexadecimal"}</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="hexadecimal"
									name="hexadecimal"
									placeholder={"Hexadecimal"}
									className="large"
									onChange={handleChange}
									value={hexadecimal}
								/>
							</div>
						</td>
					</tr>
					<tr>
						<td className="label" title={"Binary"}>
							<label htmlFor="binary" className="short">{"Bin"}</label>
							<label htmlFor="binary" className="long">{"Binary"}</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="binary"
									name="binary"
									placeholder={"Binary"}
									className="large"
									onChange={handleChange}
									value={binary}
								/>
							</div>
						</td>
					</tr>
					<tr>
						<td className="label" title={"Octal"}>
							<label htmlFor="octal" className="short">{"Oct"}</label>
							<label htmlFor="octal" className="long">{"Octal"}</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="octal"
									name="octal"
									placeholder={"Octal"}
									className="large"
									onChange={handleChange}
									value={octal}
								/>
							</div>
						</td>
					</tr>
					<tr>
						<td className="label" title={"Base 256"}>
							<label htmlFor="base256" className="short">{"256"}</label>
							<label htmlFor="base256" className="long">{"Base 256"}</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="base256"
									name="base256"
									placeholder={"Base 256 / RGB"}
									className="large"
									onChange={handleChange}
									value={base256}
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
								<div id="color_name" className="medium">{colorName}</div>
								<div
									className="color-indicator"
									style={color ? {
										backgroundColor : '#'+ color,
									} : {} }
								>&nbsp;</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="label">
							<label htmlFor="ascii" className="short">{"ASCII"}</label>
							<label htmlFor="ascii" className="long">{"ASCII"}</label>
						</td>
						<td className="input">
							<div className="input-container">
								<input
									id="ascii"
									name="ascii"
									placeholder="ASCII"
									className="code"
									value={ascii}
									onChange={handleChange}
								/>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			{showNewWindow ?
				<div className="actions">
					<a href="#"
						id="link_new_window"
						className="action"
						title={"New window"}
						onClick={openNewWindow}
					>
						<img src="img/new_window.png" alt="New window" />
					</a>
					<div className="clearfix"></div>
				</div>
			: null }
		</div>
	);
}
