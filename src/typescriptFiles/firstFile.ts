import { w3cwebsocket as W3CWebSocket } from "websocket";

let message: string = 'Hello World';
console.log(message);

const socket = new W3CWebSocket ('ws://localhost:5000');

socket.onopen = () => {
    console.log('WebSocket Client Connected');
  };

  socket.onmessage = (message) => {
    let parsedBeat = JSON.parse(message.data)
    console.log('my messgaeg',parsedBeat.type);
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
        console.log("i am subscribed");
      }
      unsubscribe(): void {
        console.log("i am not subscirbed");
      }
}

const d = new SomeClass();
d.subscribe();
d.unsubscribe();