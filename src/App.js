import React from 'react';
import './App.css';

// Storing the initial state in a constant variable outside of the component
const defaultState = {
  fullName: null,
  email: null,
  password: null,
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }


  hundleChange = (event) => {
    console.log(event.target.value);
  }



  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.hundleChange} />
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

