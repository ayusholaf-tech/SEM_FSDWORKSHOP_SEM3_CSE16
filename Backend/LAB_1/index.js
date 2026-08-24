import { EventEmitter } from "node:events";
const task = new EventEmitter();

task.on("greet",(name) =>{
  console.log(`Hello, ${name}! Welcome to the session`);
});

task.on("exit",(reason) =>{                            //Arrow function
  console.log(`Session ending. Reason: ${reason}`);
});

task.on("exit",(reason) =>{                            //Arrow function
  console.log("class started by Someone");
});

task.emit("greet","Student");
task.emit("exit","Class completed");
