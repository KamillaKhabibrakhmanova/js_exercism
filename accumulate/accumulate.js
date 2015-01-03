var accumulate = function(values, accumulator) {
	var result_array = [];
	for (var i = 0; i < values.length; i++) {
		result_array.push(accumulator(values[i]));
	}
	return result_array;
}