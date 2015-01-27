var Series = function( digits ) {

	this.strings = digits.split('');
	this.digits = this.strings.map( parseFloat );

	this.slices = function(n) {
		if ( this.digits.length < n ) {
			throw new Error( 'Slice size is too big.' );
		}
		var new_array = [];
		for ( var i = 0; i < this.digits.length; i++ ) {
			slice = this.digits.slice( i, i+n );
			if ( slice.length === n ) {
				new_array.push( slice );
			}
		}
		return new_array;
	}

}