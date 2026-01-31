// modern node

// same logic, cleaner syntax

async function getData(){
    const data = await fetchData();
    console.log(data)
}

getData();



// Think of it as :
//"Pause here until the promise resolves"
// this is how real Node APIs are written

// Error Handling in async mode
// * BAD
await fetchData();

// GOOD
async function run(){
    try{
        const data = await fetchData();
        console.log(data);
    } catch (error){
        console.error('Error: ', error);
    }
}
// backend code must never crash silently