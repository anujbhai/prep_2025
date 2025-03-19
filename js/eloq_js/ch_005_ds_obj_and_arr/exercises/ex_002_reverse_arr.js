(function() {
  let demo_arr = [1, 2, 3, 4];
  let demo_arr_2 = [10, 20, 30, 40];

  const reverse_arr = function(arr) {
    /* using for loop */
    // let result_arr = []
    // for (i = arr.length -1; i >= 0; i--) {
    //   result_arr.push(arr[i]);
    // }
    //
    // return result_arr;

    /* using reduce method */
    // return arr.reduce((accumulator, current) => [current, ...accumulator], []);

    /* using map method */
    return arr.map((_, i, a) => a[a.length - 1 - i]);
  };

  const reverse_arr_in_place = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  };

  console.log(reverse_arr(demo_arr));
  console.log("Array reverse in place before:", demo_arr_2);
  reverse_arr_in_place(demo_arr_2);
  console.log("Array reverse in place after:", demo_arr_2);
})();

