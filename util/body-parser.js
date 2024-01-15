module.exports = async (request) => {
    return new Promise((resolve, reject) => {
      try {
        let body = "";
        request.on("data",(chunk) => {
          let chunkstring = chunk.toString('utf-8')
          body += chunkstring;
        });
        request.on("end", () => {
            console.log(body)
          resolve(JSON.parse(body));
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };