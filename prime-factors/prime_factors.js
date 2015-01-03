var Factors = function() {
	
}

var primes = new Array;
	primes.push(2);
		for (var i = 3; i < 1000000; i += 2)
		{
			var iSqrt = Math.floor(Math.sqrt(i));
			var bPrime = true;
			for ( j = 0; primes[j] <= iSqrt; j++ )
			{
				if ( i % primes[j] == 0 )
				{
					bPrime = false;
					break;
				}
			}
	if ( bPrime ) primes.push(i);
}

Factors.prototype.for = function(num) {

	var counter = 0;	
	var array = [];
	var loop = function() {
		if (num === 1) {
			return [];
		} else {
			if (num % primes[counter] === 0) {
				array.push(primes[counter]); 
				num = num / primes[counter];
				loop();
			} else {
				counter ++;
				// setting a limit because I have no idea how else to prevent call stack size error
				if (counter > 10000) {
					array.push(num);
					num = 1;
				} else {
					loop();
				}
			}
		}
	};
	loop();
	return array;
}


var primeFactors = new Factors;