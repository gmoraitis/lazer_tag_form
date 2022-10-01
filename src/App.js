import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';



export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
         <Form />
         <Footer />
      </div >
    );
  }
}


