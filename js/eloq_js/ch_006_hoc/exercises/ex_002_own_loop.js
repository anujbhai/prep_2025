(function() {
  let arr = ["a", "b", "c", "d"];

  const own_loop = function(val, test, update, body) {
    while(test(val)) {
      body(val);
      val = update(val);
    }
  };

  own_loop(3, n => n > 0, n => n - 1, console.log);
  own_loop(0, n => n < arr.length, n => n + 1, n => console.log(arr[n]));
})();

