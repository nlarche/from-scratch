// Signals are eventEmitters
// we have to manage subscriptions
const context = [];

function cleanup(running) {
  for (const dep of running.dependencies) {
    dep.delete(running);
  }
  running.dependencies.clear();
}

function createEffect(fn) {
  const execute = () => {
    cleanup(running);
    context.push(running);
    try {
      fn();
    } finally {
      context.pop();
    }
  };
  const running = {
    execute,
    dependencies: new Set(),
  };

  execute();
}

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

    // Clone here is very important
    for (const sub of [...subscriptions]) {
      sub.execute();
    }
  };
  return [read, write];
}

console.log("start");
const [count, setCount] = createSignal(5);

console.log("reaction");
createEffect(() => console.log("this is a reaction to count", count()));

console.log(count());

console.log("set count to 10");
setCount(10);
console.log("set count to 15");
setCount(15);
console.log("end");
