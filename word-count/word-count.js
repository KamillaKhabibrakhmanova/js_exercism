var words = function(sentence) {
	var arr = sentence.split(/[\s]+/);
	console.log(arr);
	var word_count = {};
	
	for (var i =0; i < arr.length; i++) {
		if (word_count[arr[i]] == undefined) {
			var add_key = arr[i];
			word_count[add_key] = 1;
		}
		else {
			for (var key in word_count) {
				if (key === arr[i]) {
					word_count[key] += 1;
				}
			}
		}
	}
	return word_count;
}
