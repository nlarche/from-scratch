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

function createMemo(fn) {
  const [s, set] = createSignal();
  createEffect(() => set(fn()));
  return s;
}

const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);

const displayName = createMemo(() => {
  if (!showFullName()) {
    return firstName();
  }
  return `${firstName()} ${lastName()}`;
});

createEffect(() => console.log("My name is", displayName()));

console.log("2. Set showFullName: false ");
setShowFullName(false);

console.log("3. Change lastName");
setLastName("Legend");

console.log("4. Set showFullName: true");
setShowFullName(true);
