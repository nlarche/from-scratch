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

function giveMeData(observer) {
  [10, 20, 30].forEach(observer.next);
}

console.log("start");
giveMeData(observer);
console.log("end");

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
// TODO createObservable
// const createObservable = function (subscribe){
//   return {
//     subscribe: subscribe
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
// arrayObservable.subscribe(observer)
// console.log('end');
