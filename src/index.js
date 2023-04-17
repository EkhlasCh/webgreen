import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//const firebaseConfig = {
  //apiKey: "AIzaSyAwahCSJlBsWQDJTY-YQ5M7yOx_i3gfbh8",
  //authDomain: "greenwavedesign-9558d.firebaseapp.com",
  //databaseURL:"gs://greenwavedesign-9558d.appspot.com",
  //projectId: "greenwavedesign-9558d",
  //storageBucket: "greenwavedesign-9558d.appspot.com",
  //messagingSenderId: "613407409699",
  //appId: "1:613407409699:web:39268ae0b5314faf999396"
//};