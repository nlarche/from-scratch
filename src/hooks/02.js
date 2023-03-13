// statefull function
function getAdd() {
  let foo = 1;
  // Closure; way to have private variables
  return function add() {
    foo = foo + 1;
    return foo;
  };
}

const add = getAdd();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
foo = 99999;
console.log(add());
console.log(add());
