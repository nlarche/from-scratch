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
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
