var score = function(word) {
	var score_count = 0;
	if (word == null) return 0;
	word = word.toUpperCase();
	letter_array = word.split("");
	letter_array.forEach(function(letter) {
		if (('AEIOULNRST').search(letter) !== -1) {
			console.log(letter);
			score_count ++;
		}
		else if (('DG').search(letter) !== -1) {
			score_count += 2;
		}
		else if (('BCMP').search(letter) !== -1) {
			score_count += 3;
		}
		else if (('FHVWY').search(letter) !== -1) {
			score_count += 4;
		}
		else if (('K').search(letter) !== -1) {
			score_count += 5;
		}
		else if (('JX').search(letter) !== -1) {
			score_count += 8;
		}
		else if (('QZ').search(letter) !== -1) {
			score_count += 10;
		}
	});
	return score_count;
}