module.exports = function getSeason(date) {
    if (!date) return ('Unable to determine the time of year!');
	try {
		date.getTime();
	} 
	catch(err) {
		throw Error;
	}
	let s = date.getMonth();
	if (s >= 2 && s <= 4) return ('spring'); else
	if (s >= 5 && s <= 7) return ('summer'); else
	if (s >= 8 && s <= 10) return ('fall'); else
	if (s >= 11 || s <= 1) return ('winter');  
  // remove line with error and write your code here
};
