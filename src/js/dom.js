
const updateValues = function(inputValue, id) {
	var out = convert(inputValue, id);
	if (out) {
		for (var id in out) {
			let elt = document.getElementById(id);
			if (elt) {
				elt.value = out[id];
			}
		}
		updateColor(out.color);
	}
}

module.exports = {
	updateValues,
}