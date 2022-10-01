import './App.css';

import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' />
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

