var toRna = function(dna) {

	dna = dna.split("");
	rna = '';

	dna.forEach(function (letter) {
		if (letter === 'C') {
			rna += 'G';
		}
		else if (letter === 'G') {
			rna += 'C';
		}
		else if (letter === 'A') {
			rna += 'U';
		}
		else if (letter === 'T') {
			rna += 'A';
		}
	});
	
	return rna;
};