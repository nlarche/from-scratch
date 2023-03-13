// stream
const readable = getReadable();

function dataCb(x) {
  console.log(x);
}

function errorCb(err) {
  console.log(err);
}
function completeCb() {
  console.log("complete");
}

readable.on("data", dataCb);
readable.on("error", errorCb);
readable.on("complete", completeCb);
