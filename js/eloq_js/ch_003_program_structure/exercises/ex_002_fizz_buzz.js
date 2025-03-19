(function() {
  const fizz_buzz = (count) => {
    for (let i = 1; i <= count; i++) {
      // if ((i % 3 === 0) && (i % 5 !== 0)) {
      //   console.log("fizz");
      // } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      //   console.log("buzz");
      // } else if ((i % 5 === 0) && (i % 3 === 0)) {
      //   console.log("fizzbuzz");
      // } else {
      //   console.log(i);
      // }

      switch (true) {
        case ((i % 3 === 0) && (i % 5 !== 0)):
          console.log("fizz");
          break;
        case ((i % 5 === 0) && (i % 3 !== 0)):
          console.log("buzz");
          break;
        case (i % 5 === 0) && (i % 3 === 0):
          console.log("fizzbuzz");
          break;
        default: console.log(i)
      }
    }
  };

  fizz_buzz(30);
})();

