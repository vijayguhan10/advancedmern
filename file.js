const newpromise = new Promise((resolve, reject) => {
  if (5 > 9) {
    reject("This is an error");
  }
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
newpromise
  .then((message) => {
    console.log(message);
    return "Chaining another promise";
  })
  .then((nextMessage) => {
    console.log(nextMessage);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Final promise resolved after 1 second");
      }, 1000);
    });
  })
  .then((finalMessage) => {
    console.log(finalMessage);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  .finally(() => {
    console.log("All promises have been handled.");
  });

const asyncpromise = async () => {
  try {
    const message = await newpromise;
    console.log("first async mesage : ", message);
    const calculateasync = async (a, b) => {
      try {
        if (a > b) {
          return new Promise((_, reject) => {
            setTimeout(() => {
              console.log("a is greater than b, rejecting after 1 second");
              reject(new Error("a is greater than b"));
            }, 1000);
          });
        }   
        return a + b;
      } catch (err) {
        console.log(err.message);
      }
    };
    console.log("calculateasync result: ", await calculateasync(15, 10));
    const finalMessage = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Final promise resolved after 1 second in async function");
      }, 1000);
    });
    console.log(finalMessage);
  } catch (error) {
    console.error("An error occurred in async function:", error);
  } finally {
    console.log("All promises have been handled in async function.");
  }
};
asyncpromise();
