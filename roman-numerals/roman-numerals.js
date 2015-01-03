var toRoman = function(number) {
	var roman_number = "";
	while ((number - 1000) >= 0) {
		roman_number += "M";
		number -= 1000;
	}

	while ((number - 900) > 0) {
		roman_number += "CM";
		number -= 900;
	}
	while ((number - 500) > 0) {
		roman_number += "D";
		number -= 500;
	}
	while ((number -400) > 0) {
		roman_number += "CD";
		number -= 400;
	}
	while ((number - 100) > 0) {
		roman_number += "C";
		number -= 100;
	}
	while ((number -90) > 0) {
		roman_number += "XC";
		number -= 90;
	}
	while ((number - 80) > 0) {
		roman_number += "LXXX"
		number -= 80;
	}
	while ((number - 90) > 0) {
		roman_number += "LXX"
		number -= 80;
	}
	while ((number - 70) > 0) {
		roman_number += "LXX"
		number -= 70;
	}
	while ((number - 60) > 0) {
		roman_number += "LX"
		number -= 60;
	}
	while ((number - 50) > 0) {
		roman_number += "L"
		number -= 50;
	}
	while (number - 40 > 0) {
		roman_number += "XL";
		number -= 40;
	}
	while ((number - 10 > 0)) {
		roman_number += "X";
		number -= 10;
	}
	switch (number) {
    case 1:
        roman_number += "I";
        break; 
    case 2:
        roman_number += "II";
        break;
    case 3:
        roman_number += "III";
        break; 
    case 4:
        roman_number += "IV";
        break;
    case 5:
        roman_number += "V";
        break; 
    case 6:
        roman_number += "VI";
        break;
    case 7:
        roman_number += "VII";
        break; 
    case 8:
        roman_number += "VIII";
        break; 
    case 9:
        roman_number += "IX";
        break;
	}
	console.log(roman_number);
	return(roman_number);
}