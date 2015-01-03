var Triangle = function(side1, side2, side3) {
	this.kind = function() {
		if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
			throw error;
		}
		else if (side1 === side2 && side2=== side3 && side1 === side3) {
			return "equilateral";
		}
		else if (side1 === side2 || side2=== side3 || side1 === side3) {
			return "isosceles";
		}
		else {
			return "scalene";
		}
	}
}