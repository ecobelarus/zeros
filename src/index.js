module.exports = function getZerosCount(number) {

	// факториал 5 даёт один 0 на конце

	var zeros = 0;

	while (number >= 5) {

	number = Math.floor(number / 5);
  	zeros += number;

	}

	return zeros;

}