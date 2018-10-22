function advancedFilter (input) {
    var positiveArr = input.filter(function(number) {
        return (number % 3 == 0 || number % 5 == 0 || number % 7 == 0) && (number !==0);
      });
    return positiveArr;
};
console.log( advancedFilter( [1, 2, -3, 4, 5, 6, -7, 8, 9, 10] ));
module.exports = advancedFilter;