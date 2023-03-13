function useState(initValue) {
  let _val = initValue;
  const state = _val;
  const setState = (val) => {
    _val = val;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);

console.log(count);
setCount(2);
// count is not repull
console.log(count);
