var Triplet = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triplet.prototype.sum = function() {
    return this.a + this.b + this.c;
}

Triplet.prototype.product = function() {
    return this.a * this.b * this.c;
}

Triplet.prototype.isPythagorean = function() {
    if ((Math.pow(this.a, 2) + Math.pow(this.b, 2)) === Math.pow(this.c, 2)) {
        return true;
    } else {
        return false;
    }
}

Triplet.where = function(condition) {
    var triplet_array = [];
    var max = condition.maxFactor;
    var min = condition.minFactor || 1;

    for(var first = min; first < max - 1; first++) {
        for(var second = min + 1; second < max; second ++) {
            for(var third = min + 2; third <= max; third ++) {
                var new_triplet = new Triplet(first, second, third);
                if (new_triplet.isPythagorean() === true && second>first) {
                	if (condition.sum) {
                		if (new_triplet.sum() === condition.sum){
                			triplet_array.push(new_triplet)
                		}
                	} else {
                    	triplet_array.push(new_triplet);
                    }
                }
            }
        }
        
    }
    return triplet_array;
}