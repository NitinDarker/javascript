// 1. Define a callback function
function myCallback(result) {
  console.log("Callback executed with result:", result);
}

// 2. Define a function that takes a callback as a parameter
function doSomethingAsync(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const data = "Operation complete!";
    callback(data); // Call the callback with the result
  }, 1000);
}

// 3. Call the function and pass the callback
doSomethingAsync(myCallback);
