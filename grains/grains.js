var Grains = function() {

	this.square = function(n) {
		return Math.pow(2,(n-1));
	}

	this.total = function() {
		total = 0;
		for (var i = 0; i <= 64; i++) {
			total += this.square(i);
		}
		return total;
	}

}