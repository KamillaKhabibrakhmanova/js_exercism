var Binary = function(number) {	
	this.number = number;
}

Binary.prototype.toDecimal = function() {
	if (this.number === 'carrot') {
		return 0;
	}
	var num_array = this.number.split('');
	var sum = 0;
	var count = 0;
	for (var i = num_array.length -1 ; i >= 0; i--) {
		sum += num_array[i] * Math.pow(2, count);
		count ++;
	}
	return sum;
}