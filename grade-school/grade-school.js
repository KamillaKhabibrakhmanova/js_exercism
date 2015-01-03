var School = function() {
	db = {};
	this.roster = function() {
		for (var key in db) {
			db[key].sort();
		}
		return db;
	};
	this.add = function(name, grade) {
		if (db[grade] === undefined) {
			db[grade] = [];
		}
		db[grade].push(name);
	};
	this.grade = function(grade) {
		if (db[grade] === undefined) {
			return [];
		} else {
		return db[grade].sort();
		}
	};
}