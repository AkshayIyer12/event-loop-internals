const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  readFile('./temp.js').then(callback).catch(err => console.log(err))
}

const timeoutScheduled = Date.now();

setImmediate(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`------------Immediate--------------------${delay}ms have passed since I was scheduled---------------------`);
})
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`------------Timeout--------------------${delay}ms have passed since I was scheduled---------------------`);
}, 0)
process.nextTick(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`------------NextTick--------------------${delay}ms have passed since I was scheduled---------------------`);
})

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  setTimeout(() => {
     const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 1:', delay)
  }
}, 100)
});
someAsyncOperation(() => {
  setTimeout(() => {
     const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 2:', delay)
  }
}, 200)
});

someAsyncOperation(() => {
  setTimeout(() => {
     const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 3:', delay)
  }
}, 300)
});

someAsyncOperation(() => {
     const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 4:', delay)
  }
});

someAsyncOperation(() => {
  setTimeout(() => {
     const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 5:', delay)
  }
}, 500)
});

someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 6:', delay)
  }
});

someAsyncOperation(() => {
  const startCallback = Date.now();
  // setImmediate(() => {
  //   const delay = Date.now() - timeoutScheduled;
  //   console.log(`&op ------------Immediate--------------------${delay}ms have passed since I was scheduled---------------------`);
  // })
  // setTimeout(() => {
  //   const delay = Date.now() - timeoutScheduled;
  //   console.log(`&op ------------Timeout--------------------${delay}ms have passed since I was scheduled---------------------`);
  // }, 10)
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    const delay = Date.now() - timeoutScheduled;
    console.log('passing time 7:', delay)
  }
});


