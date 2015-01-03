var pigLatin = function(){};

pigLatin.translate = function(phrase){
	phrase = phrase.split(' ');
	
	for (var i = 0; i < phrase.length; i++) {

		if (phrase[i].match(/(\b[^aeiou])\w+/)){
			var letter_count = 1;
			if (phrase[i].match(/(\b(ch)|(th)|(qu))\w+/)){
				letter_count = 2;
			}
			if (phrase[i].match(/(\b(sch)|(thr)|(squ))\w+/)){
				letter_count = 3;
			}
			phrase[i] = phrase[i].split('');
			var first = phrase[i].splice(0,letter_count).join('');
			phrase[i].push(first);
			phrase[i] = phrase[i].join('');		
		}
		phrase[i] += 'ay';
	}

	return phrase.join(' ');
}