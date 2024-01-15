
// synchrounous code execution

// console.log("start operation")
// function sleep(milliseconds) {
//     let startTime = new Date().getTime()
//     while(new Date().getTime() < startTime + milliseconds) {
//         console.log("in progress")
//     }
//     console.log("operation is Done")
// }
// sleep(10000);
// console.log("do something else..")

// asynchronous code execution

console.log("start operation")
function sleep(milliseconds) {
    console.log("operation is running")
    setTimeout(()=>{
        console.log("operation is Done")
    },milliseconds)
}
sleep(1000);
console.log("do something else..")