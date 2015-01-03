var Atbash = function(){
	var obj = {
		encode : function( string ){
			var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
			string = string.replace(/[.,!?\s]/g,'');
			string = string.toLowerCase().split('');
						
			for (var i = 0; i < string.length; i++) {
				if (string[i].match(/^[A-z]/)){
					string[i] = alphabet[25 - alphabet.indexOf(string[i])];
				}	
			}

			for (var i = 0; i < string.length; i++) {
	
				if (i % 5 === 4 && i < string.length -1  ) {
					string[i] = string[i] + " ";
				}
			}
			return string.join('');			
		}
	}
	return obj;

}

var atbash = new Atbash;