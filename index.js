const http = require("http")
const app = http.createServer((request, response)=>{
    console.log("res",response)
    if(request.url == '/'){
        response.write(JSON.stringify({message:"Node is an open source, cross-platform runtime environment for executing JavaScript code it allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications."}))
    }
    else if(request.url == '/about'){
        response.write("About Page")

    } 
    else if(request.url == '/contact'){
        response.write("Contact Page")

    }
    response.end()
})
app.listen(2300)

