const React = (function () {
  let _val;

  function useState(initValue) {
    const state = _val || initValue;
    const setState = (val) => {
      _val = val;
    };
    return [state, setState];
  }

  function render(Component) {
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
