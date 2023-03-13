// statefull function
let foo = 1;

function add() {
  foo = foo + 1;
  return foo;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());
foo = 99999;
console.log(add());
console.log(add());
