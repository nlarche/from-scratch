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
TODO;
// pipe => RxJS 5.5
// Composition
// f(g(h(x)))

console.log("start");
arrayObservable
  .map((x) => x / 10)
  .filter((x) => x === 2)
  .delay(2000)
  .subscribe(observer);
console.log("end");

// const observer = {
//   next: function dataCb(x) {
//     console.log(x);
//   },
//   error: function errorCb(err) {
//     console.log(err);
//   },
//   complete: function completeCb() {
//     console.log("complete");
//   },
// };
//
// function map(transformFn) {
//   return (input$) => {
//     const output$ = createObservable(function subscribe(outputObserver) {
//       console.log(input$);
//       input$.subscribe({
//         next: function next(x) {
//           const y = transformFn(x);
//           outputObserver.next(y);
//         },
//         error: outputObserver.error,
//         complete: outputObserver.complete,
//       });
//     });
//     return output$;
//   };
// }
//
// function filter(predicateFn) {
//   return (input$) => {
//     const output$ = createObservable(function subscribe(outputObserver) {
//       input$.subscribe({
//         next: function next(x) {
//           if (predicateFn(x)) {
//             outputObserver.next(x);
//           }
//         },
//         error: outputObserver.error,
//         complete: outputObserver.complete,
//       });
//     });
//     return output$;
//   };
// }
//
// function delay(delay) {
//   return (input$) => {
//     const output$ = createObservable(function subscribe(outputObserver) {
//       input$.subscribe({
//         next: function next(value) {
//           setTimeout(() => outputObserver.next(value), delay);
//         },
//         error: (err) => outputObserver.error(err),
//         complete: () => outputObserver.complete(),
//       });
//     });
//     return output$;
//   };
// }
//
// const createObservable = function (subscribe) {
//   return {
//     subscribe: subscribe,
//     pipe: function pipe(...fns) {
//       return fns.reduce((g, f) => f(g), this);
//     },
//   };
// };
//
// const arrayObservable = createObservable(function subscribe(observer) {
//   [10, 20, 30].forEach(observer.next);
//   observer.complete();
// });
//
// console.log("start");
// arrayObservable
//   .pipe(
//     map((x) => x / 10),
//     filter((x) => x !== 2),
//     delay(2000)
//   )
//   .subscribe(observer);
// console.log("end");
