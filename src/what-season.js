module.exports = function getSeason(date) {
    if (!date) return ('Unable to determine the time of year!');
	try {
		date.getTime();
	} 
	catch(err) {
		throw Error;
	}
	const m = date.getMonth();
	if (m >= 2 && m <= 4) return ('spring'); else
	if (m >= 5 && m <= 7) return ('summer'); else
	if (m >= 8 && m <= 10) return ('fall'); else
	if (m >= 11 || m <= 1) return ('winter');  
  // remove line with error and write your code here
};
