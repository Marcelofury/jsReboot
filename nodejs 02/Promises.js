// Promises states
// 1. pending
// 2.fulllfiled
// 3. rejected


const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 2000);
    });
};


  fetchData().then(data => {
    console.log(data);
  })

  // promises flatten callback hell