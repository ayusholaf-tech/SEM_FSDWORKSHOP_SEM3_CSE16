import http from "http";

const userdata = [

  {

    id: 1,

    name: "John Doe",

    email: "dd",

  }

];

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  //res.setHeader("Content-Type", "text/plain");

  if (url === "/msg" && method === "GET") {

    res.end("Hello is welcome to my server");

  } 

  else if (url == "/sys" && method == "GET") {

    res.end("This is system information");

  }

  else if (url == "/data" && method == "GET") {

    res.statusCode = 201;

    res.end(JSON.stringify(userdata));

  }

  else if (url == "/user" && method == "GET") {

    res.statusCode = 200;

    res.end(JSON.stringify(userdata[0]));      

  }

  else if(url.startsWith("/user/") && method == "GET"){

    const id = url.split("/")[2];

    console.log(id);

    const user = userdata.find((u) => u.id == id);

    if(!user){

      return res.end("user not find");

    }

    res.statusCode = 200;

    res.end(JSON.stringify(user));

  }

  else if(url ==="/create" && method == "POST"){

    let body = "";

    req.on("data",(chunk)=>{

      body += chunk;

    });

    req.on("end",()=>{

      const incomingdata = JSON.parse(body); 

      const newuser = {            

        id: userdata.length + 1,   

        name: incomingdata.name,

        email: incomingdata.email,

      };

      userdata.push(newuser); 

      res.statusCode = 201;

      res.end(JSON.stringify(newuser));

    }); 

  }

  else {

    res.end("No response for this request");

  }

});

server.listen(3005, () => {

  console.log("Server is running on port 3005");

});