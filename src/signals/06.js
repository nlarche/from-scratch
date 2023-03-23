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

function One(props) {
  const doubleCount = props.count * 2;
  return doubleCount;
}

function Two(props) {
  return props.count * 2;
}

const [count, setCount] = createSignal(2);

setCount(5);
