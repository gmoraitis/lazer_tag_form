import React from 'react';
import './App.css';

// Storing the initial state in a constant variable outside of the component
const defaultState = {
  firstName: null,
  lastName: null,
  email: null,
  players: null,
  date: null,
  time: null,
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }


  handleChange = (event) => {
    console.log(event.target.value);
  }



  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>LazerTag World 🔫</h2>
          <form>
            {/* First Name */}
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                required
              />
            </div>
            {/* Email */}
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              />
            </div>
            {/* Players */}
            <div>
              <label>Players</label>
              <input
                type="number"
                min="0"
                max="25"
                name="players"
                onChange={this.handleChange}
                required
              />
            </div>
            {/* Date*/}
            <div className="date">
              <label>Choose a date :</label>
              <input
                type="date"
                name="date"
                onChange={this.handleChange}
                min="2022-1-01"
                max="2023-12-31"
                required
              />
            </div>
            <div className="time">
              <label>Choose an hourly session : </label>
              <select name="time" onChange={this.handleChange} required>
                <option disabled selected value>
                  -- Please select an option --
                </option>
                <option value="08:00AM - 09:00AM">08:00AM - 09:00AM</option>
                <option value="09:00AM - 10:00AM">09:00AM - 10:00AM</option>
                <option value="10:00AM - 11:00A">10:00AM - 11:00AM</option>
                <option value="11:00AM - 12:00PM">11:00AM - 12:00PM</option>
                <option value="12:00PM - 1:00PM">12:00PM - 1:00PM</option>
                <option value="1:00PM - 2:00PM">1:00PM - 2:00PM</option>
                <option value="2:00PM - 3:00PM">2:00PM - 3:00PM</option>
                <option value="3:00PM - 4:00PM">3:00PM - 4:00PM</option>
                <option value="4:00PM - 5:00PM">4:00PM - 5:00PM</option>
                <option value="5:00PM - 6:00PM">5:00PM - 6:00PM</option>
                <option value="6:00PM - 7:00PM">6:00PM - 7:00PM</option>
              </select>
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

