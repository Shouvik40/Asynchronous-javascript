// using callbacks
// function download(url, cb) {
//   console.log("starting to donwload data from ", url);
//   setTimeout(function donw() {
//     console.log("Download Completed");
//     const content = "ABCDEF";
//     cb(content);
//   }, 4000);
// }
// function writeFile(data, cb) {
//   console.log("Started writing a file with ", data);
//   setTimeout(function write() {
//     console.log("Completed writing the data in a file");
//     const filename = "file.txt";
//     cb(filename);
//   }, 5000);
// }
// function upload(url, file, cb) {
//   console.log("Started uploading ", file, "on ", url);
//   setTimeout(function up() {
//     console.log("upload completed");
//     const response = "SUCCESS";
//     cb(response);
//   }, 2000);
// }
// download("www.xyz.com", function process(content) {
//   console.log("Donwloaded data is ", content);
//   writeFile(content, function process(filename) {
//     console.log("Writing completed ", filename);
//     upload("www.upoad.com", filename, function processUpload(response) {
//       console.log("we have uploaded with", response);
//     });
//   });
// });

// using promises
// function download(url) {
//   return new Promise(function (res, rej) {
//     console.log("starting to donwload data from ", url);
//     setTimeout(function donw() {
//       console.log("Download Completed");
//       const content = "ABCDEF";
//       res(content);
//     }, 4000);
//   });
// }
// let x = download("www.xyz.com");
// let y = x.then(function writeFile(content) {
//   return new Promise(function (res, rej) {
//     console.log("Started writing a file with ", content);
//     setTimeout(function write() {
//       console.log("Completed writing the data in a file");
//       const filename = "file.txt";
//       res(filename);
//     }, 5000);
//   });
// });
// y.then(function upload(filename) {
//   let url = "www.upload.com";
//   return new Promise(function (res, rej) {
//     console.log("Started uploading ", filename, "on ", url);
//     setTimeout(function up() {
//       console.log("upload completed");
//       const response = "SUCCESS";
//       res(response);
//     }, 2000);
//   });
// });

// or

function download(url) {
  return new Promise(function (res, rej) {
    console.log("starting to donwload data from ", url);
    setTimeout(function donw() {
      console.log("Download Completed");
      const content = "ABCDEF";
      res(content);
    }, 4000);
  });
}
function writeFile(content) {
  return new Promise(function (res, rej) {
    console.log("Started writing a file with ", content);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      res(filename);
    }, 5000);
  });
}
function upload(filename, url) {
  return new Promise(function (res, rej) {
    console.log("Started uploading ", filename, "on ", url);
    setTimeout(function up() {
      console.log("upload completed");
      const response = "SUCCESS";
      res(response);
    }, 5000);
  });
}
// download("www.xyz.com")
//   .then((content) => writeFile(content))
//   .then((filename) => upload(filename, "www.upload.com"));
// download("www.xyz.com")
//   .then(function (content) {
//     return writeFile(content);
//   })
//   .then(function (filename) {
//     return upload(filename, "www.upload.com");
//   });

// function doAfterRecieving(value) {
//   let future = iter.next(value);
//   if (future.done) return;
//   future.value.then(doAfterRecieving);
// }
// function* steps() {
//   const downloadedData = yield download("www.xyz.com");
//   const fileWritten = yield writeFile(downloadedData);
//   const uploadResponse = yield upload(fileWritten, "www.drive.google.com");
//   return uploadResponse;
// }
async function steps() {
  const downloadedData = await download("www.xyz.com");
  const fileWritten = await writeFile(downloadedData);
  const uploadResponse = await upload(fileWritten, "www.drive.google.com");
  return uploadResponse;
}
console.log(steps());
// const iter = steps();
// console.log(iter);
// const future = iter.next();
// future.value.then(doAfterRecieving);

// let iter = fun();
// console.log(iter.next());
