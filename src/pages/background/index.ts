console.log("Load done!");

const r = chrome.webRequest;
const trackUrls = {
  urls: ["<all_urls>"],
};

// function decodeBody(data?: ArrayBuffer) {
//   if (!data) return;
//   const decoder = new TextDecoder();
//   const requestBody = decoder.decode(data);
//   return requestBody;
// }

const reqBodyHeaders = ["requestBody", "extraHeaders"];
const reqHeaders = ["requestHeaders", "extraHeaders"];
const resHeaders = ["responseHeaders", "extraHeaders"];
const errorHeaders = ["extraHeaders"];
// r.onBeforeRequest.addListener(
//   function (details) {
//     console.log(` Body`);
//     if (details.requestBody !== null && details.requestBody.raw !== undefined) {
//       const body = decodeBody(details.requestBody.raw[0].bytes);
//       console.log(body);
//     }
//   },
//   trackUrls,
//   reqBodyHeaders
// );

r.onBeforeSendHeaders.addListener(
  function (details) {
    console.log(`Request Header`);
    // console.log(details);
    chrome.cookies.getAll({url: details.url}).then((value) => console.log(value));
  },
  trackUrls,
  reqHeaders
);

// r.onSendHeaders.addListener(
//   function (details) {
//     console.log(details);
//   },
//   trackUrls,
//   reqHeaders
// );

// r.onHeadersReceived.addListener(
//   function (details) {
//     console.log(`Response Header`);
//     console.log(details);
//   },
//   trackUrls,
//   resHeaders
// );

// r.onAuthRequired.addListener(
//   function (details) {
//     console.log(details);
//   },
//   trackUrls,
//   resHeaders
// );

// r.onBeforeRedirect.addListener(
//   function (details) {
//     console.log(details);
//   },
//   trackUrls,
//   resHeaders
// );

// r.onResponseStarted.addListener(
//   function (details) {
//     console.log(details);
//   },
//   trackUrls,
//   resHeaders
// );

// r.onCompleted.addListener(function (details) {
//   console.log(details);
// }, trackUrls as  any);
