var Strain = function() {
}

Strain.prototype.keep = function(arr, strain_function) {
	var result_array = [];
	for (var i = 0; i < arr.length; i++) {
		if (strain_function(arr[i]) === true) {
			result_array.push(arr[i]);
		}
	}
	return result_array;
}

Strain.prototype.discard = function(arr, strain_function) {
	var result_array = [];
	for (var i = 0; i < arr.length; i++) {
		if (strain_function(arr[i]) === false) {
			result_array.push(arr[i]);
		}
	}
	return result_array;
}

var strain = new Strain;