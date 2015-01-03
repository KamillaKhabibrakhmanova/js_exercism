var Luhn = function(num) {
	this.num = num;
	this.array = this.num.toString().split('');
	this.digits_array = this.array.map(function(number){ return Number(number); });
	this.checkDigit = this.digits_array[this.digits_array.length - 1];
	this.addends = double(this.digits_array);
	this.checksum = this.addends.reduce(function(currentVal, previousVal, index, array){
		return previousVal + currentVal;
	});
	this.valid = check(this.checksum);
}


var double = function(array) {
	for (var i = array.length - 2; i >= 0; i -= 2) {
			array[i] *= 2;
			if (array[i] >= 10) {
				array[i] -= 9;
			}
	}
	return array;
}

var check = function(sum){
	if (sum % 10 === 0) {
		return true;
	} else {
		return false;
	}
}

Luhn.create = function(num) {
	var luhn = new Luhn(num);
	var ten_luhn = new Luhn(num * 10);
	if (luhn.valid === false){
		if (ten_luhn.checksum % 10 === 0) {
			return (num * 10);
		}
		return (num * 10) + (10 - (ten_luhn.checksum % 10));
	}
}