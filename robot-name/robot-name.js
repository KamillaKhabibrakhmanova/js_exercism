var Robot = function() {
	var name ='';

	var name_create = function() {

		name += (String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase());
		name += (String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase());
		name += Math.floor((Math.random()*999));
		
		return name;
	};

	this.name = name_create();

	this.reset = function() {
		this.name = name_create();
		return this.name;
	}
	
}