console.log('Starting App');

/*  The function in the callback function area will excute after 2000 milliseconds
    Once secondsetTimeout is called it's put on a callstack where it will wait for it's turn to complete.

    Call Stack: The first method is at the bottom, all other methods are on top.
        You can add items to the call stack and remove from the top but not below the top one.
 
    Calling a time out it registers in the Node APIs. Then the call stack runs the next statement.
    Calling the second time out does the same. Since it finishes first it gets put into the callback queue
    Callback queue: Callback functions wait until the call stack to be empty before it'll move the funciton into the call stack.
 */

setTimeout(()=> {
    console.log('Inside of callback');
}, 2000)

setTimeout(()=> {
    console.log('Second setTimeout');
}, 0);
console.log('Finishing up');