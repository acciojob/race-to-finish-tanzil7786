// Array of promises with random delays
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1  resolved'), Math.random() * 4000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), Math.random() * 4000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), Math.random() * 4000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), Math.random() * 4000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), Math.random() * 4000 + 1000))
];

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.log('Error:', error);
  });
