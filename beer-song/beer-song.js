var Beer = {
	verse: function(n) {
		if (n === 0) {
			var str = "No more bottles of beer on the wall, "
			str += "no more bottles of beer.\n"
			str += "Go to the store and buy some more, "
			str += "99 bottles of beer on the wall.\n"
			return str;
		}
		else if (n === 1) {
			var str = "1 bottle of beer on the wall, ";
			str += "1 bottle of beer.\n"
			str	+=  "Take it down and pass it around, ";
			str +=	"no more bottles of beer on the wall.\n";

			return str;
		}else if (n === 2) {
			var str = "2 bottles of beer on the wall, ";
			str += "2 bottles of beer.\n"
			str	+=  "Take one down and pass it around, ";
			str +=	"1 bottle of beer on the wall.\n";

			return str;
		} else {
			var str = n + " bottles of beer on the wall, ";
			str += n + " bottles of beer.\n"
			str	+=  "Take one down and pass it around, " + (n -1);
			str +=	" bottles of beer on the wall.\n";
			return str;
		}
	}

}

Beer.sing = function(end, start) {
	var song = "";
	if (!start) {
		start =0;
	}
	for (var i = end; i > start; i--) {
		song += Beer.verse(i) + "\n";
	}
	song += Beer.verse(start);
	return song;
};

//module.exports = Beer;