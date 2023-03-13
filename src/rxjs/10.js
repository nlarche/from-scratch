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

function map(transformFn) {
  const input$ = this;
  const output$ = createObservable(function subscribe(outputObserver) {
    input$.subscribe({
      next: function next(x) {
        const y = transformFn(x);
        outputObserver.next(y);
      },
      error: outputObserver.error,
      complete: outputObserver.complete,
    });
  });
  return output$;
}

const createObservable = function (subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter,
    delay: delay,
  };
};

const arrayObservable = createObservable(function subscribe(observer) {
  [10, 20, 30].forEach(observer.next);
  observer.complete();
});

console.log("start");
arrayObservable.map((x) => x / 10).subscribe(observer);
console.log("end");

// function filter(predicateFn) {
//   const input$ = this;
//   const output$ = createObservable(function subscribe(outputObserver) {
//     input$.subscribe({
//       next: function next(x) {
//         if (predicateFn(x)) {
//           outputObserver.next(x);
//         }
//       },
//       error: outputObserver.error,
//       complete: outputObserver.complete,
//     });
//   });
//   return output$;
// }
//
// function delay(delay) {
//   const input$ = this;
//   const output$ = createObservable(function subscribe(outputObserver) {
//     input$.subscribe({
//       next: function next(value) {
//         setTimeout(() => outputObserver.next(value), delay);
//       },
//       error: (err) => outputObserver.error(err),
//       complete: () => outputObserver.complete(),
//     });
//   });
//   return output$;
// }
//
// console.log("start");
// arrayObservable
//   .map((x) => x / 10)
//   .filter((x) => x === 2)
//   .delay(2000)
//   .subscribe(observer);
// console.log("end");
