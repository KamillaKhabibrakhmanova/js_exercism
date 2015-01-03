var Sieve = function(number) {
	this.primes = [];
	for (var i = 2; i <= number; i++) {
		var not_prime = true;
		for (var j = 2; j < i; j++){		
			if (i % j === 0) {
				not_prime = false;
			}
		}
		if (not_prime === true) {
			this.primes.push(i);
		}
	}
}

