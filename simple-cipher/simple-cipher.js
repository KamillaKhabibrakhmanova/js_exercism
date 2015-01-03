var Cipher = function(key) {
	this.all_letters = 'abcdefghijklmnopqrstuvwxyz';
	if (key || key === "") {
		
		if ((key.match(/[A-Z0-9]/)) || (key === "")){
			throw new BadKey;
		}
		else {
			this.key = key;
		}

	}

	else {
		var letters = '';

		for (var i = 0; i < 100; i++){
			letters += this.all_letters.charAt(Math.floor(Math.random() * this.all_letters.length));
		}

		this.key = letters;
	}
};

Cipher.prototype.encode = function(string) {
	this.string = string;
	this.encoded = '';

	for (var i = 0; i < string.length; i++) {

		var shift_key = this.all_letters.search(this.key[i]);
		var shift_value = this.all_letters.search(string[i]) + shift_key;

		if (shift_value >= 26) {
			shift_value -= 26;
		}

		this.encoded += this.all_letters.charAt(shift_value);
	}
	
	return this.encoded;
}

Cipher.prototype.decode = function() {
	return this.string;
}

function BadKey(){
	this.message = "Bad key";
	this.name = BadKey;
}