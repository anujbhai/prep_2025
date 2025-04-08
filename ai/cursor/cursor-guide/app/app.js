// create a function that takes a string and returns the string reversed

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('hello'));  

// create a function to add 2 numbers

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
