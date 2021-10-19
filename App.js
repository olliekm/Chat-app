import logo from './logo.svg';
import './App.css';
import Background from './background.jpg';
import db from './firebase';
import { useEffect, useState } from "react";
import React from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, Timestamp, serverTimestamp, query, orderBy } from '@firebase/firestore';
import { async, deepCopy } from '@firebase/util';

function App() {
  const [chats, setChats] = useState([]);
  console.log(chats)
  useEffect(() => {
    const collectionRef = collection(db, "chats")
    const q = query(collectionRef, orderBy("timestamp", "asc"))
    const unsub = onSnapshot(q, (snapshot) =>
      setChats(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, [])

  const handleNew = async () => {
    const chat = document.querySelector('.chatinput').value
    const name = document.querySelector('.nameinput').value

    const collectionRef = collection(db, "chats");
    const payload = { name, chat, timestamp: serverTimestamp() }
    await addDoc(collectionRef, payload);
    document.querySelector('.chatinput').value = ''
    function scrollToBottom() {
      var div = document.querySelector(".chatsCont");
      div.scrollTop = div.lastChild.offsetTop
    }
  }
  const handleClear = async (id) => {
    await deleteDoc(doc(db, "chats", id));
  }
  function theme() {
    const colour = document.querySelector(".colorPicker").value
    document.querySelector(".main").style.backgroundColor = colour;
  }
  return (
    <div className="App">

      <div className="main">
        <h1><a href="https://www.youtube.com/watch?v=lwmTxbLh0DQ" target="_blank" style={{ textDecoration: "none" }}>talk with oli</a></h1>
        <h3>Anonymous chat app</h3>
        <input type="color" name="My Color Picker" onChange={theme} className="colorPicker" />

        <div className="chatContainer">
          <div className="chatsCont">
            <ul>
              {chats.map((chat) => (
                < li key={chat.id}> {chat.name}: <br />{chat.chat}<i className="fas fa-trash" onClick={() => handleClear(chat.id)}></i></li>
              ))}
            </ul>
          </div>
          <div className="chatinputs">
            <input type="text" className="nameinput" placeholder="Name" /> <input type="text" className="chatinput" placeholder="Start talking" /> <button onClick={handleNew}><i class="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
