var Raindrops = function() {

}

Raindrops.prototype.convert = function(num) {
	var primes = [2,3,5,7];
	var raindrops = '';
	if (num % 3 === 0) {
		raindrops += 'Pling';
	}
	if (num % 5 === 0) {
		raindrops += 'Plang';
	}
	if (num % 7 === 0) {
		raindrops += 'Plong';
	}
	if (raindrops !== '') {
		return raindrops;
	} else {
		return num.toString();
	}
}