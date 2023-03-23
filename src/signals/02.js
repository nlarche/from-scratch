// Signals are eventEmitters
// we have to manage subscriptions
const context = [];

function subscribe(running, subscriptions) {
  subscriptions.add(running);
  running.dependencies.add(subscriptions);
}

function createSignal(value) {
  const subscriptions = new Set();
  const read = () => {
    const running = context[context.length - 1];
    if (running) {
      subscribe(running, subscriptions);
    }
    return value;
  };
  const write = (nextValue) => {
    value = nextValue;

    for (const sub of subscriptions) {
      sub.execute();
    }
  };
  return [read, write];
}

console.log("start");
const [count, setCount] = createSignal(5);
console.log(count());
setCount(10);
console.log(count());
console.log("end");
