const React = (function () {
  // https://reactjs.org/docs/hooks-rules.html
  let hooks = [];
  let idx = 0;

  function useState(initValue) {
    const state = hooks[idx] || initValue;
    // freeze idx for setState
    const _idx = idx;
    const setState = (val) => {
      hooks[_idx] = val;
    };
    idx++;
    return [state, setState];
  }

  function useEffect(callBack, deps) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = deps.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) {
      callBack();
    }
    hooks[idx] = deps;
    idx++;
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("Hello");
  React.useEffect(
    function () {
      console.log("here from use effect");
    }
    // [count]
    // [text]
    // []
    // undefined
  );
  return {
    render: () => console.log(count, text),
    click: () => setCount(count + 1),
    type: (text) => setText(text),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("World");
React.render(Component);
