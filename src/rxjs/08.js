const observer = {
  next: function dataCb(x) {
    console.log(x.clientX, x.clientY);
  },
  error: function errorCb(err) {
    console.log(err);
  },
  complete: function completeCb() {
    console.log("complete");
  },
};

const createObservable = function (subscribe) {
  return {
    subscribe: subscribe,
  };
};

const clickObservable = createObservable(function subscribe(observer) {
  //
});

console.log("start");
clickObservable.subscribe(observer);
console.log("end");

// TODO click event
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const clickObservable = createObservable(function subscribe(observer) {
  document.addEventListener("click", observer.next);
});
