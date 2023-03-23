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

// React workloop
//github.com/facebook/react/blob/f765f022534958bcf49120bf23bc1aa665e8f651/packages/react-reconciler/src/ReactFiberScheduler.js#L1136
https: var App = React.render(Component);
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
