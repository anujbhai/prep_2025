// unshift and shift
let todo_list = [];
function remember(task) {
  todo_list.push(task);
}
function getTask() {
  return todo_list.shift(); // removes and returns
}
function rememberUrgently(task) {
  todo_list.unshift(task);
}
remember("haircut");
console.log("remember:", todo_list);
getTask()
console.log("get task:", todo_list);
rememberUrgently("pay bill")
console.log("remember urgently", todo_list);

// indexOf and lastIndexOf
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// slice
console.log("slice:", [0, 1, 2, 3, 4].slice(2, 4));
console.log("slice:", [0, 1, 2, 3, 4].slice(2));

// array join
function remove(arr, i) {
  return arr.slice(0, i).concat(arr.slice(i + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));




