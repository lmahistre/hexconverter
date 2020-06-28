module.exports = props => `<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>${props.name}</title>
			<link rel="shortcut icon" href="img/logo-32.png" type="image/vnd.microsoft.icon" />
			<link rel="stylesheet" type="text/css" href="style.css" />
			<link rel="manifest" href="manifest.json" />
			<meta name="theme-color" content="${props.themeColor}" />
			<script type="text/javascript" src="app.js"></script>
		</head>
		<body>
			<div id="application-root">Javascript is required to use this app</div>
		</body>
	</html>
`;
