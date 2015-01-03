var PhoneNumber = function(num) {
	this.num = num;
	var phone = '';
	var obj = {
		
		number: function() {
			num = num.split("");

			for (var i = 0, len = num.length; i < len; i++) {

				if (num[i].match(/[\d]/)) {
					phone += num[i];
				}
			}
			if (num.length == 11 && phone[0] == 1) {
				phone = phone.substr(1);
			}
			if (phone.length === 10) {
				num = phone;
			}
			else {
				num = "0000000000";
			}
			return num;
		},

		areaCode: function() {

			return num.substr(0,3);
		},

		toString: function() {
			return "(" + num.substr(0,3) + ")" + " " + num.substr(3,3) + "-" + num.substr(6);
		}

	}
	return obj;

}