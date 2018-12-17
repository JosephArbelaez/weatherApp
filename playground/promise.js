/*
    Promises give us two functions we can call. 
        Resolve is if the data call was fulfilled.
        Reject is if the data call wasn't fulfilled.
        Status is pending when it's waiting to be resolved or rejected.
*/
var asynchAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('Arguments must be numbers');
        }
        }, 1500);
    })
}

asynchAdd(5,7).then((res) => {
    console.log('Result: ', res);
    return asynchAdd(res, 33);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((res) => {
    console.log('Should be 45', res)
}, (errorMessage) => {
    console.log(errorMessage);
})
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey, it worked!');
//         reject('Unable to fulfill the promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, () => {
//     console.log('Error: ', errorMessage);
// });