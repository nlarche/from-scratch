function createSignal(value) {
  const read = () => value;
  const write = (nextValue) => (value = nextValue);
  return [read, write];
}

console.log("start");
const [count, setCount] = createSignal(5);
console.log(count());
setCount(10);
console.log(count());
console.log("end");
