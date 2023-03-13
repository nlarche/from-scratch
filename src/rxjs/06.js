function dataCb(x) {
  console.log(x);
}

function errorCb(err) {
  console.log(err);
}

function completeCb() {
  console.log("complete");
}

function giveMeData(dataCb, errorCb, completeCb) {
  [10, 20, 30].forEach(dataCb);
}

console.log("start");
giveMeData(dataCb);
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
//TODO transform to observer object
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
// function giveMeData(observer) {
//   [10, 20, 30].forEach(observer.next);
// }
//
// console.log('start');
// giveMeData(observer)
// console.log('end');
