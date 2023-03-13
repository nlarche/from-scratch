function dataCb(x) {
  console.log(x);
}

function errorCb(err) {
  console.log(err);
}

function completeCb() {
  console.log("complete");
}

console.log("start");
giveMeData(dataCb, errorCb, completeCb);
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
// to implement
// function giveMeData(dataCb, errorCb, completeCb){
//   [10,20,30].forEach(dataCb);
// }
