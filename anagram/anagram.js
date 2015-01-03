function anagram(string) {
	var object = {
		matches : function(arr) {
			var match_array = [];
			sort_string = string.toLowerCase().split("").sort().join();
			if (arguments.length > 1) {
				arr = Array.prototype.slice.call(arguments);
			}
			for (var i = 0; i < arr.length; i++) {
				sort_value = arr[i].toLowerCase().split("").sort().join();
				if (sort_string === sort_value) {
					if (arr[i].toLowerCase() !== string.toLowerCase()) {
					match_array.push(arr[i]);
					}
				}
			}
			return match_array;
		}
	}
	return object;
};





