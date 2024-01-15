const requestBodyparse = require("../util/body-parser")
const writeToFile = require("../util/write-to-file")
module.exports = async (req,res) => {
    let baseUrl = req.url.substring(0,req.url.lastIndexOf("/") + 1)
    let id = req.url.split("/")[3]
    const regexV4 = RegExp(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    )
    if (!regexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            title: "Validation Failed",
            message: "UUID is not valid",
          })
        );}
    else if(baseUrl === "/api/movies/" && regexV4.test(id)) {
        try{
            let body = await requestBodyparse(req)
            console.log(body)
            const index = req.movies.findIndex((movie)=>{
                return movie.id === id
            })
            console.log(index)
            if(index === -1) {
                res.statusCode = 404;
                res.write(JSON.stringify({
                    title: "Not Found",message: "Movie not found"
                }))
            }
            else {
                req.movies[index] = {id,...body}
                console.log(req.movies[index])
                writeToFile(req.movies)
                console.log(req.movies)
                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify(req.movies[index]))
            }
            }
        catch(err) {
            {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({title: "Validation Failed",message: "request body is not valid",
            }))
            }
        }
    }else {
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
    }
    
}