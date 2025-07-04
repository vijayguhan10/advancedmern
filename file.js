const rsolvereject = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; 
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});

rsolvereject
  .then((message) => {
    console.log(message);
    return "This will run if the promise was resolved.";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
  });
const asyncFunciton = async () => {
  try {
    const result = await rsolvereject.then((message) => {
      console.log("Inside async function:", message);
      return "This will run inside the async function.";
    }).then((message) => {
      console.log("Inside async function after then:", message);
      return "Final message from async function.";
    });
    console.log("Result from async function:", result); 
    
  } catch (error) {
    console.error("Caught an error in async function:", error.message);
  }
};
// asyncFunciton();
