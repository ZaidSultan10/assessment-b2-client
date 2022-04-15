import { w3cwebsocket as W3CWebSocket } from "websocket";

let message: string = 'Hello World';
console.log(message);
let parsedString: string

const socket = new W3CWebSocket ('ws://localhost:5000');

socket.onopen = () => {
    console.log('WebSocket Client Connected');
  };

  socket.onmessage = (message) => {
    let parsedBeat = JSON.parse(message.data)
    console.log('my parsedBeat >>> ',parsedBeat );
    parsedString = parsedBeat.type
    console.log('my messgaeg >>> ',parsedString );
  };

abstract class CustomWebSocketClient {
    constructor(public name: string) {}
    // Return a promise that resolves when a `subscribed` message is received and rejects if an error message is received
    abstract subscribe();
    // Return a promise that resolves when an `unsubscribed` message is received and rejects if an error message is received
    abstract unsubscribe();
}

class SomeClass extends CustomWebSocketClient{
    constructor() {
        super("welcome to my youtube channel");
    }

    subscribe(): void {
        socket.send(JSON.stringify({type:"Subscribe"}))
        console.log("i am subscribed");
      }
    unsubscribe(): void {
        socket.send(JSON.stringify({type:"Unsubscribe"}))
        console.log("i am not subscirbed");
      }
}

const d = new SomeClass();
if(parsedString !== ''){
    setTimeout(()=>{
        d.unsubscribe();
    },2000)
}
// d.subscribe();
// d.unsubscribe();