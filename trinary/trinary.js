var Trinary = function(number) {
	this.number = number;
}

Trinary.prototype.toDecimal = function(){
	var digits_array = this.number.split('');
	var length = digits_array.length;
	var j = length - 1;
	var result = 0;
	for (var i = 0; i < length; i++) {
		result += (digits_array[i] * Math.pow(3,j));
		j --;
	}
	if (isNaN(result)) {
		return 0;
	}
	return result;
}