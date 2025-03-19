(function() {
  const arr_demo = [
    1, 2, 3, [
      4, 5, 6, [
        7, 8, 9
      ],
      10, 11, 12
    ], 13, 14, 15
  ];
  const fl_arr_recur_and_loop = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(fl_arr_recur_and_loop(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }

    return result
  };

  const fl_arr_reduce_and_recur = function(arr) {
    return arr.reduce((accumulator, current) => accumulator.concat(Array.isArray(current) ? fl_arr_reduce_and_recur(current) : current), []); 
  };

  const fl_arr_reduce_and_spread = function(arr) {
    return arr.reduce((accumulator, current) => Array.isArray(current) ? [...accumulator, ...current]: [...accumulator, current], []); 
  }; // does not deep flatten nested array

  const fl_arr_flat = function(arr) {
    return arr.flat(Infinity);
  };
  console.log(fl_arr_recur_and_loop(arr_demo));
  console.log(fl_arr_reduce_and_recur(arr_demo));
  console.log(fl_arr_reduce_and_spread(arr_demo));
  console.log(fl_arr_flat(arr_demo));
})();

