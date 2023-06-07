const zmq = require("zeromq");

const sock  = new zmq.push();

run();

async function run (){

    await sock.bind("tcp://127.0.0.1:7000");
    console.log("Server is ready listening on port 7000");
    console.log("Press any key to start sending the jobs!");
    


}