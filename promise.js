// function makeAPICall() {
//     return new Promise((resolve, reject) => {
//       const url = 'path/to/data.json'; // Replace with the path to your JSON file

//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('API request failed');
//           }
//           return response.json();
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }

//   // Usage: calling the API using the promise

//   makeAPICall()
//     .then(response => {
//       console.log('API response:', response);
//     })
//     .catch(error => {
//       console.error('API error:', error);
//     });

function getRand(x) {
  return Math.floor(Math.random() * x);
}

function createPromiseWithLoop() {
  return new Promise(function executor(res, rej) {
    for (let i = 0; i < 10000000000; i++) {}
    let num = getRand(10);
    if (num % 2 == 0) {
      res(num);
    } else {
      rej(num);
    }
  });
}
let a = createPromiseWithLoop();
console.log(a);
console.log("HEllo");
function createPromiseWithSetTimeout() {
  return new Promise(function executor(res, rej) {
    setTimeout(function () {
      let num = getRand(10);
      if (num % 2 == 0) {
        res(num);
      } else {
        rej(num);
      }
    }, 10000);
  });
}
// let a = createPromiseWithSetTimeout();
// console.log(a);
// console.log("HEllo");

// imp
function createPro() {
  return new Promise(function exec(res, rej) {
    console.log("resolving the promise");
    res("Done");
  });
}
setTimeout(function process() {
  console.log("timer completed");
}, 0);

let p = createPro(); //value and state

p.then(
  function fulfillmentHandler(val) {
    console.log("fulfillment value", val);
  },
  function rejectHandler() {}
);
console.log("ending");
