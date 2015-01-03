var SpaceAge = function(seconds) {
	this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function() {
	this.earth_years = +(this.seconds/31557600).toFixed(2);
	return this.earth_years
}

SpaceAge.prototype.onMercury = function() {
	return +(this.earth_years/0.2408467).toFixed(2);
}

SpaceAge.prototype.onVenus = function() {

	return +((this.earth_years/0.61519726)-0.005).toFixed(2);
}	

SpaceAge.prototype.onMars = function() {
	return +(this.earth_years/1.8808158).toFixed(2);
}

SpaceAge.prototype.onJupiter = function() {
	return +(this.earth_years/11.862615).toFixed(2);
}

SpaceAge.prototype.onUranus = function() {
	return +(this.earth_years/84.016846).toFixed(2);
}

SpaceAge.prototype.onSaturn = function() {
	return +(this.earth_years/29.447498).toFixed(2);
}

SpaceAge.prototype.onNeptune = function() {
	return +(this.earth_years/164.79132).toFixed(2);
}
