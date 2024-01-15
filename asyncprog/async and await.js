const userLogin = () => {
    console.log("Enter the username and password")
    let username = prompt("Enter the username: ")
    let password = prompt("Enter the password: ")

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Performing User Authentication")
            if(username === "dipesh" && password === "dipesh") {
                resolve("User Authenticated")
            }
            else {
                reject("failed to authenticate")
            }
        },1000)
    })
}

function goToHomePage(userAuthstatus) {
    return Promise.resolve(`Got to Homepage as : ${userAuthstatus}`)
}

// userLogin().then((response)=>{
//     console.log("validated user")
//     return goToHomePage(response)
// }).then((userAuthstatus)=>{
//     console.log(userAuthstatus)
// }).catch((err)=>{
//     console.log(err)
// })

// implementation using async and await more readable
async function performTask() {
    try{
    const response = await userLogin();
    console.log("validated user")
    const userAuthstatus = await goToHomePage(response)
    console.log(userAuthstatus)
    }
    catch(err) {
        console.log(err)
    }
    
}

// performTask()

const makeApiCall = (Time)=>{
    return () => 
    Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`this executed in ${Time} milliseconds`)
        },Time)
    })
}

const apireq = [makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]

(async function() {
    for (let request of apireq){
        console.log(await request())
    }
})()