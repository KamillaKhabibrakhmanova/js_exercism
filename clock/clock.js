function Clock(hour, minute) {
    this.hour = hour;
    this.minute = minute || 0;

    while ( this.minute >= 60 ) {
    	this.hour += 1;
    	this.minute = this.minute - 60;
    }

	while ( this.minute < 0 ) {
    	this.minute = 60 + this.minute;
    	this.hour --;
    }

    
    if ( this.hour >= 24 && this.minute !== 0 ) {
    	this.hour = 0;
    }

    else if ( this.hour < 0 && this.minute !== 0 ){
    	this.hour = 23;
    }

}

Clock.prototype.toString = function() {
	var str = '';
	if (0 <= this.hour && this.hour < 10) {

		str += "0" + this.hour + ":";
	}
	else {
		str += this.hour + ":";
	}
	if (0 <= this.minute && this.minute < 10) {
		str += "0" + this.minute;
	}
	else {
		str += this.minute;
	}

	return str; 
}

Clock.prototype.plus = function( num ) {
	return new Clock( this.hour, this.minute + num );
}

Clock.prototype.minus = function( num ) {
	return new Clock( this.hour, this.minute - num );
}

Clock.prototype.equals = function( clock ) {
	if ( this.hour === clock.hour 
		&& this.minute === clock.minute ) {
		return true;
	}
	else return false;
}

function at( hr, min ) {
	return new Clock( hr, min );
}
