import React, {useState,useEffect} from 'react'
import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";

function App() {

  const [changeState,setChangedState] = useState('Subscribe')
  const [heartbeat,setHeartbeat] = useState('')
  const subTypes = [`Subscribed`,`Unsubscribed`]
  // Create WebSocket connection.
  const socket = new W3CWebSocket ('ws://localhost:5000');

  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket Client Connected');
    };
  },[])

  socket.onmessage = (message) => {
    let parsedBeat = JSON.parse(message.data)
    console.log('my messgaeg',parsedBeat.type);
    subTypes.map((item) => {
      item === parsedBeat.type ? setChangedState(parsedBeat.type) : setHeartbeat((parsedBeat.type))
    })
    changeState === `Unsubscribed` && setChangedState(`Subscribe`)
  };

  const sendMessage = () => {
    if(changeState === `Subscribed`){
      socket.send(JSON.stringify({type:`Unsubscribe`}));
    }else{
      socket.send(JSON.stringify({type:changeState}));
    }
  }

  return (
    <div className="App">
      <button onClick={sendMessage}>{changeState}</button>
      <p>{heartbeat}</p>
    </div>
  );
}

export default App;
