const http = require('http')

const server = http.createServer((req, res)=>{
    // first argument is the request object which is requested by the user
    // second is the response object which is provided by our server according to the request made.
    console.log(req)
    if(req.url === '/'){
        res.end()
    }
    res.write('Hello!!')
    res.end()
})

server.listen(5000)