// Promise
const res = fetch("http://numbersapi.com/random?min=10&max=20");

function dataCb(x) {
  console.log(x.status);
}

function errorCb(err) {
  console.error(err);
}

res.then(dataCb, errorCb);
