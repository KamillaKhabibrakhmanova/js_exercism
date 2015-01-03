var compute =function(dna1, dna2) {
	var mutations = 0;
	for (var i = 0; i < dna1.length; i++) {
		if (dna1[i] !== dna2[i]) {
			mutations ++;
		}
	}
	return mutations;
}