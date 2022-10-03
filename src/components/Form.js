import React from 'react';
import '../App.css';

// Email validation
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// Name validation
const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);

// Form validation
const validateForm = (errors) => {
  let valid = true;
  // returns true if there are no errors
  Object.values(errors).forEach(function (errorMessage) {
    if (errorMessage.length > 0) {
      valid = false;
    }
  });
  return valid;
};

// Storing the initial state in a constant variable so that we can reset and reuse the state later  
const defaultState = {
  submitting: false,
  data: {
    firstName: null,
    lastName: null,
    email: null,
    players: null,
    date: null,
    time: null,
  },
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    players: '',
    time: 'Invalid',
  },
};

// Form component
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

// handleChange function to handle the input changes 
// and set the state of the form data and errors.
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { data } = this.state;
    // we assign the value of the state to a variable errors so we can use it in the switch statement
    let errors = this.state.errors;

    // we use a switch statement to check the name of the input field and validate it
    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length > 3 && validNameRegex.test(value)
            ? ''
            : 'First name is not valid! Must be at least 3 letters long!';
        break;
      case 'lastName':
        errors.lastName =
          value.length > 3 && validNameRegex.test(value)
            ? ''
            : 'Last name is not valid! Must be at least 3 letters long!';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'players':
        errors.players = value < 1 ? 'Type least 1 person!' : '';
        break;
      case 'time':
        errors.time = !value ? '' : '';
        break;
      default:
        break;
    }

    // We put inside the state the errors and the data, while we take a copy of the data
    // using the spread operator and we assign in that copy every change that we make in the state
    this.setState({ errors, data: { ...data, [name]: value } });
  };


  // handleSubmit function to handle the submit event of the form.
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form');
      this.handlePrint();
    } else {
      console.error('Invalid Form');
    }
  };

  // I putted handlePrint inside handleSubmit to pass the logic of handlePrint
  // when we use the handleSubmit function.
  handlePrint = () => {
    console.log(this.state);
    // I used the setState method to change the state of the submitting property to true
    this.setState({ submitting: true });
  };

  // A function that brings back the form in its initial state
  // and call it from the render method.
  handleInitialForm = () => {
    this.setState({
      // take a copy of the initial state (...) and assign false to the submitting property
      ...defaultState, submitting: false
    });
  };


  render() {
    // Passing state to the render method
    const { errors, submitting, data } = this.state;
    return (
      <div>
        <div className="form">
          <h2>LazerTag World 🔫</h2>
          {!submitting && (
            <form onSubmit={this.handleSubmit}>

              {/* First Name */}
              <div className="firstLastName">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  required
                />
                {errors.firstName.length > 0 && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>

              {/* Last Name */}
              <div className="firstLastName">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  required
                />
                {errors.lastName.length > 0 && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>

              {/* Email */}
              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  required
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              {/* Players */}
              <div className="players">
                <label>Players</label>
                <input
                  type="number"
                  min="0"
                  max="25"
                  name="players"
                  onChange={this.handleChange}
                  required
                />
                {errors.players.length > 0 && (
                  <span className="error">{errors.players}</span>
                )}
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

              {/* Time */}
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
                {errors.time.length == 0 && (
                  <span className="error">{errors.time}</span>
                )}
              </div>

              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          )}

          {/* If the state of the submitting property is true, then we show the message */}
          {submitting && (
            <div>
              You are submitting the following:
              <ul>
                {Object.entries(data).map(
                  ([name, value]) =>
                    value && (
                      <li key={name}>
                        <strong>{name}</strong> : {value.toString()}
                      </li>
                    )
                )}
              </ul>
              <div className="submit" >
                {/* // I added the onClick event to the button to call the hundleInitialForm function
                // and bring back the form in its initial state. */}
                <button type="button" onClick={this.handleInitialForm}>Return</button>
              </div>
            </div>
          )}
        </div>
        <div>
        </div>
      </div>
    );
  }
}
