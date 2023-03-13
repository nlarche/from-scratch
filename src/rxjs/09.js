const observer = {
  next: function dataCb(x) {
    console.log(x);
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

const arrayObservable = createObservable(function subscribe(observer) {
  [10, 20, 30].forEach(observer.next);
  observer.complete();
});

console.log("start");
arrayObservable.subscribe(observer);
console.log("end");

// Map function
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
// const observer = {
//   next: function dataCb(x) {
//     console.log(x);
//   },
//   error: function errorCb(err) {
//     console.log(err);
//   },
//   complete: function completeCb() {
//     console.log("complete");
//   }
// }
//
// function map(tranformFn){
//   const input$ = this;
//   const ouput$ = createObservable(function subscribe(outputObserver){
//      input$.subscribe({
//        next: function next(x){
//          const y = tranformFn(x);
//          outputObserver.next(y)
//        },
//        error: outputObserver.error,
//        complete: outputObserver.complete,
//      })
//   })
//   return ouput$;
// }
//
// const createObservable = function (subscribe){
//   return {
//     subscribe: subscribe,
//     map: map,
//   }
// }
//
// const arrayObservable = createObservable(function giveMeData(observer) {
//   [10, 20, 30].forEach(observer.next);
//   observer.complete()
// })
//
//
// console.log('start');
// arrayObservable
//   .map(x => x/10)
//   .subscribe(observer)
// console.log('end');
