(function() {
  // abstracting repitition
  const repeat = function(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  };

  repeat(3, console.log);

  let labels = [];

  repeat(5, i => labels.push(`Unit ${ i + 1 }`));
  
  console.log(labels);

  // Higher Order Function
  // 1. creating new function by abstracting over action
  function greater_than(n) {
    return m => m > n;
  }

  let greater_than_10 = greater_than(10)
  console.log(greater_than_10(11));

  // 2. change other function
  const noisy = function(f) {
    return (...args) => {
      console.log(`Calling with ${ args }`);

      let result = f(...args);

      console.log(`Called with ${ args } returned ${ result }`);

      return result;
    };
  };

  noisy(Math.min)(3, 2, 1);

  // 3. functions that call new type of control flow
  const unless = function(test, then) {
    if (!test) then();
  }

  repeat(3, (n) => {
    unless(n % 2 === 1, () => {
      console.log(n, "is even");
    });
  });
})();

