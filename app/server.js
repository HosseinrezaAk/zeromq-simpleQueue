const zmq = require("zeromq");

const sock  = new zmq.push();

run();

async function run (){

    sock.bind("tcp://127.0.0.1:7000");
}