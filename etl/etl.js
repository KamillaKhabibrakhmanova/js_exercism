var transform = function( obj ){

	var array_count = Object.keys( obj ).length + 1,
		new_set = {};

	for ( var number in obj ) {

		for (var key in obj[number]) {
			var lowered = obj[number][key].toLowerCase();

			 if ( new_set[lowered] ){
			 	new_set[lowered] += number;
			 } else {
			 	new_set[lowered] = +number;
			 }
		}
	}

	return new_set;
}