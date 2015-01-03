var Octal = function(octal) {
	this.octal = octal;
}

Octal.prototype.toDecimal = function() {
	var power = this.octal.length - 1;
	var array = this.octal.split('');
	var decimal = 0;

	if (isNaN(this.octal)) {
		return 0;
	}

	for (var i = 0; i < this.octal.length; i++) {
		decimal += array[i] * Math.pow(8, power);
		power --;
	}
	return decimal;
}

var octal = new Octal(val);