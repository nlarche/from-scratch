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

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("Hello");
  return {
    render: () => console.log(count, text),
    click: () => setCount(count + 1),
    type: (text) => setText(text),
  };
}

var App = React.render(Component);
App.click();
App.type("World");
var App = React.render(Component);
App.type("coucou");
App.click();
React.render(Component);
