function is_even(n) {
  if (n < 0) return is_even(-n);
  if (n === 0) return true;
  if (n === 1) return false;
  return is_even(n - 2);
}

console.log(is_even(50));
console.log(is_even(75));
console.log(is_even(-1));
console.log(is_even(-10));

