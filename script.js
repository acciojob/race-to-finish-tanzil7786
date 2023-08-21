
Sure, here's how you can achieve this by using the given HTML structure and completing the code in the script.js file:

Open the script.js file and add the following code:
javascript
Copy code
// script.js
const outputDiv = document.getElementById('output');

const getRandomTime = () => Math.floor(Math.random() * 5) + 1;

const promises = [
  new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime() * 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime() * 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime() * 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime() * 1000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime() * 1000))
];

Promise.any(promises)
  .then(result => {
    outputDiv.textContent = result;
  })
  .catch(error => {
    outputDiv.textContent = "All promises rejected";
  });