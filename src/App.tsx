import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/header/header.componenet';
// import axios from 'axios';
import Button from '@mui/material/Button';


function App() {

  // useEffect(() => {

  //   const fetchImage = async (data: any) => {

  //     // const headers = {
  //     //   'Content-Type': 'application/json',
  //     //   'Authorization': 'Token 71646c0862102234af39cc3659b844629f4be351'
  //     // };

  //     let response = await axios.post('http://localhost:5000/getImage', {
  //         url: data.urls.get
  //     });

  //     // let response = await fetch(data.urls.get, {
  //     //   method: 'get',
  //     //   headers: headers
  //     // });
  //     console.log("response", response);

  //   }

  //   const fetching = async () => {
  //     let response = await fetch('http://localhost:5000/uploadImage', {
  //       method: 'post',
  //       headers: {
  //         'Authorization': 'Token 71646c0862102234af39cc3659b844629f4be351',
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         version: "6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c",
  //         input: { "prompt": "1girl, brown hair, green eyes, colorful, autumn, cumulonimbus clouds, lighting, blue sky, falling leaves, garden"}
  //       })
  //     });
      
  //     let data = await response.json();
  //     await fetchImage(data);
  //     console.log("data", data);
  //   }

  //   fetching();

  // }, []);

  return (
    <div className="container">
        <Header></Header>
    </div>
  );
}

export default App;
