(function() {
  const SCRIPTS = require("./scripts");

  // FILTERING ARRAYS
  const filter = function(arr, test) {
    let passed = [];

    for (let item of arr) {
      if (test(item)) {
        passed.push(item)
      }
    }

    return passed;
  };

  // TRANSFORMING WITH MAP
  const map = function(arr, transform) {
    let mapped = [];

    for (let item of arr) {
      mapped.push(transform(item));
    }

    return mapped;
  };

  // SUMMARIZING WITH REDUCE
  const reduce = function(arr, combine, start) {
    let current = start;

    for (let item of arr) {
      current = combine(current, item);
    }

    return current;
  };

  // reduce twice to find the script with most characters
  const char_count = function(arr) {
    return arr.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  };

  // COMPOSABILITY
  // w/o HOF
  const find_biggest = function() {
    let biggest = null;
    
    for (let item of SCRIPTS) {
      if (biggest === null || char_count(biggest) < char_count(item)) {
        biggest = item;
      }

      console.log(biggest);
    }
  };
  // composing average readable approach
  const average = function(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
  };
  // composing average abstract (+fast) approach
  const avg_abs_fast = function() {
    let total = 0;
    let count = 0;

    for (let script of SCRIPTS) {
      if (script.living) {
        total += script.year;
        count += 1;
      }
    }

    console.log(Math.round(total / count));
  };

  // STRINGS
  const char_script = function(code) {
    for (let item of SCRIPTS) {
      if (item.ranges.some(([from, to]) => code >= from && code < to)) {
        return item;
      }
    }

    return null;
  };

  // console.log(filter(SCRIPTS, s => s.living));
  console.log(SCRIPTS.filter(s => s.direction == 'ttb'));

  let rtl_scripts = SCRIPTS.filter(s => s.direction == 'rtl');
  console.log(map(rtl_scripts, s => s.name));

  console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
  console.log([1, 2, 3, 4].reduce((a, b) => a + b))

  console.log(SCRIPTS.reduce((a, b) => {
    return char_count(a) < char_count(b) ? b : a;
  }));
  find_biggest();

  console.log("Living scripts:", Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
  console.log("Dead scripts:", Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

  avg_abs_fast();

  console.log(char_script(121));
}) ();

