//  promise and error handling with it
// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task execution")
//     if (false) {
//         const person = {name:"sid"}
//         resolve(person)
//     }
//     else {
//         const error = {errCode: "1001"}
//         reject(error)
//     }
// })

// promise.then(
// (val)=>{console.log(val)}
// ).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("clean up")
// })

// interacting with promise after its execution

// let p = Promise.resolve("execution is Done")
// let l = Promise.reject("The promise is rejected")

// l.then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })

//Promises are asynchronous

// function asyncTask() {
//     return Promise.resolve()
// }
// asyncTask().then(()=>{
//     console.log(name)
// })

// let name = "siddharth"

// chaining in promises
// const p = Promise.reject("failed")
// p.then((val)=>{
//     console.log(val)
//     return "done2"
// }).then((val)=>{
//     console.log(val)
//     return "done3"
// }).then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })

// promise.all and promise.race]
const makeApiCall = (Time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`this executed in ${Time} milliseconds`)
        },Time)
    })
}

let multiAPicall = [makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)]
Promise.all(multiAPicall).then((values)=>{
    console.log(values)
})

Promise.race(multiAPicall).then((val)=>{
    console.log(val)
})