/********************
 Growing functions
 ********************/
function zero_pad(number, width) {
  let str = String(number);

  while (str.length < 3) {
    str = "0" + str;
  }

  return str;
}
function print_farm_inventory(animal1, animal2, animal3) {
  console.log(`${ zero_pad(animal1, 3) } Cows`);
  console.log(`${ zero_pad(animal2, 3) } Chickens`);
  console.log(`${ zero_pad(animal3, 3) } Pigs`);
}

print_farm_inventory(7, 16, 3);

