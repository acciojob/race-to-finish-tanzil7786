
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