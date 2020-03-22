const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample){
  if(typeof sample != 'string') return false;
  let str = Number.parseFloat(sample);
  if(isNaN(str) || str <= 0 || str > 15) return false;
  let form = 0.693 / HALF_LIFE_PERIOD;
  let res = Math.log(MODERN_ACTIVITY/ str)/form;
  return Math.ceil(res);
  // remove line with error and write your code here
};
