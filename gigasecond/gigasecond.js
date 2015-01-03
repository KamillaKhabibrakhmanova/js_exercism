function Gigasecond( init_date ) {
	this.init_date = init_date;
}

Gigasecond.prototype.date = function() {
	var date_after_gigaseconds = new Date( this.init_date.getTime() + Math.pow( 10, 12 ));
	date_after_gigaseconds.setMinutes( 0 );
	date_after_gigaseconds.setSeconds( 0 );
	return date_after_gigaseconds;
}