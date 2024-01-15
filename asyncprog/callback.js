// explaining callback synchronous
// console.log("task start")
// function asynctask(cb) {
//     console.log("task running");
//     setTimeout(cb,0)
// }
// asynctask(() => console.log(name))
// console.log("task end")

// const name = "siddharth"

// handling errors in callbacks
function asynctask(cb) {
    setTimeout(()=>{
        cb(null,"This is the data from the server")
    },0)
}
// error is the first argument of the callback function
asynctask((err,data) =>{
    if(err){
       throw err;
    }
    else {
        console.log("data",data)
    }
    
    })

// call back hell or pyramid of doom
function asynctask(cb) {
    setTimeout(()=>{
        cb(null,"This is the data from the server")
    },0)
}
function makeApiCall(cb) {
    setTimeout(()=>{
        console.log("this is async task execution")
    },0)
}

makeApiCall(()=>{
    makeApiCall(()=>{
        makeApiCall(()=>{
            makeApiCall(()=>{
                asynctask(()=>{
                    asynctask(()=>{
                        asynctask(()=>{
                    
                        })
                    })  
                })
            })
        })  
    })
})

// promises and async await helps solve this problem