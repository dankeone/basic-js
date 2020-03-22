  module.exports = class DepthCalculator {
    calculateDepth(arr,i = 0,res = []) {
        i += 1;
        res.push(i);
        arr.forEach(count => {
        if (Array.isArray(count)) {
            this.calculateDepth(count,i,res);
            }
        });
      return Math.max(...res);
    }
};   