const fs = require("fs")
const path = require("path")


module.exports = (data) => {
    try{
        fs.writeFileSync(path.join(__dirname,"..","Data","movies.json"), JSON.stringify(data),"utf-8")
    }catch(err) {
        console.log(err)
    }
}