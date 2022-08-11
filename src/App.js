import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';


const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

function App() {
  return (
    <Container className='forContainer'>
   <span className='container1'>
   <div className='pie1'>
        <Pie data={data} />
      </div>
      <div className='pie2'>
        <Pie data={data} />
      </div>
     
   </span>

    </Container>
  );
}

export default App;
