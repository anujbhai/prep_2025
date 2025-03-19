/********************
 Defining a function
 ********************/
// without param
const make_noise = function() {
  console.log("pling!");
};
make_noise();

// multiple params
const round_to_1 = function(n, step) {
  let remainder = n % step; // 3

  return n - remainder + (remainder < step / 2 ? 0 : step); // 23 - 3 + (0) :- 20 (23 rounded to 20)
};

console.log(round_to_1(23, 10));

/********************
 Binding and scopes
 ********************/
let val_x = 10; // global

if (true) {
  let y = 20; // local to if block
  var z = 30; // global
}

const halve = function(val_n) {
  return val_n / 2; // 'val_n' is local
};

let val_n = 10; // 'val_n' is global
console.log(halve(100)); // 100/2 :- 50
console.log(val_n); // 10

/********************
 Nested scopes
 ********************/
const hummus = function(factor) {
  const ingredient = function(amt, unit, name) {
    let ingredient_amt = amt * factor;

    if (ingredient_amt > 1) {
      unit += 's';
    }

    console.log(`${ ingredient_amt } ${ unit } ${ name }`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(1);

/********************
 Functions as values
 ********************/
 // will be discussed in detail in ch_005

/********************
 Declaration notation
 ********************/
console.log("The future: ", future());

function future() {
  return "You'll never have flying cars...";
}

/********************
 Arrow functions
 ********************/
 // const sq_1 = (x) => { return x * x; };
 // const sq_2 = x => x * x;
 // const horn = () => console.log("Honk!");

/********************
 The call stack
 ********************/
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first!");

/********************
 Optional arguments
 ********************/
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log('substract:', minus(10)); // missing argument is undefined here
console.log('substract:', minus(10, 5));

function round_to_2(n, step = 1) {
  let remainder = n % step; // 0.5

  return n - remainder + (remainder < step / 2 ? 0 : step); // 4.5 - 0.5 + (1) :- 4 | 4.5 - 0.5 + (0) :- 5
}
console.log("round: ", round_to_2(4.5)); // 4
console.log("round: ", round_to_2(4.5, 2)); // 5

/********************
 Closures
 ********************/
// Eg. 1
function wrap_val(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrap_val(1);
let wrap2 = wrap_val(10);

console.log('closure wrap 1:', wrap1());
console.log('closure wrap 2:', wrap2());

// Eg. 2
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log("Multiply twice:", twice(5));

/********************
 Recursion
 ********************/
// Eg. 1
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

// Eg. 2
function find_solution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${ history } + 5)`) ??
        find(current * 3, `(${ history }) * 3`);
    }
  }

  return find(1, "1");
}
console.log("find solution:", find_solution(24));


/********************
 Functions and side effects
 ********************/

