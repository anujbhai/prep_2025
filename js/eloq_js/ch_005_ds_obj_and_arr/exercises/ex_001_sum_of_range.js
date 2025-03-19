(function() {
  const range = function(start, end, step = 1) {
    let req_arr = [];
    
    if (step > 0) {
      for (let i = start; i <= end; i+=step) {
        req_arr.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i >= end; i+=step) {
        req_arr.push(i);
      }
    } else {
      console.error("Step value cannot be zero.");
    }

    return req_arr;
  };
  
  const sum = function(arr) {
    let req_sum = 0;
    for (let i = 0; i < arr.length; i++) {
      req_sum += arr[i];
    }
    return req_sum;
  }
  
  const equation = range(1, 10, 2)

  console.log(equation);
  console.log(sum(equation));
})();

