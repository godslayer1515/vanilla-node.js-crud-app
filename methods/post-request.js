const crypto = require("crypto")
const reqbodyparser = require("../util/body-parser")
const writeToFile = require("../util/write-to-file.js")
module.exports = async (req,res) => {
    if(req.url === "/api/movies")
    {
        try{
            let body = await reqbodyparser(req)
            body.id = crypto.randomUUID()
            req.movies.push(body);
            writeToFile(req.movies)
            res.writeHead(201,{"Content-Type":"application/json"})
            res.end(JSON.stringify(body))
        }catch(err) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({title: "Validation Failed",message: "requestbody is not valid",
        }))
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
      }
}