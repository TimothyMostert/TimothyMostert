/* eslint-disable no-restricted-syntax */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/serviceWorker.js").then(
      registration => {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      },
      err => {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const form = document.querySelector("#form-1");
const formData = new FormData(form);
const searchParams = new URLSearchParams(formData).entries();
for (const pair of formData.entries()) {
  console.log(`${pair[0]}, ${pair[1]}`);
}
