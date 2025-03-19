let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);
console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);

// 'delete' and 'in' operators
let an_obj = {
  left: 1,
  right: 2,
};
console.log(an_obj.left);
delete an_obj.left;
console.log(an_obj.left);
console.log("left" in an_obj);
console.log("right" in an_obj);
// find properties in an object (returns array of string)
console.log("props in an_obj:", Object.keys(an_obj));
console.log("props:", Object.keys({ x: 0, y: 0, z: 2 }));
// Copy one object's props to another object
let obj_A = { a: 1, b: 2 };
Object.assign(obj_A, { b: 3, c: 4 });
console.log("Assigned obj props:", obj_A);
// Mutability
let obj_01 = { val: 10 };
let obj_02 = obj_01;
let obj_03 = { val: 10 };

console.log("compare:", obj_01 == obj_02);
console.log("compare:", obj_01 == obj_03);

obj_01.val = 15;

console.log(obj_02.val);
console.log(obj_03.val);

