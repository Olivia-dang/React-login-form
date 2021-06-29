import React from "react";
import "./App.css";

const users = [
  {
    email: "first@gmail.com",
    password: "password",
  },
  {
    email: "second@gmail.com",
    password: "12345",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultMessage: "",
      email: "",
      password: "",
    };
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // console.log(email,password) //=> my input hi@email.com password
    this.setState({
      resultMessage: "",
    });

    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      //then check password
      if (password === foundUser.password) {
        this.setState({
          resultMessage: "User successfully authenticated!!",
        });
      } else {
        this.setState({
          resultMessage: "Wrong password",
        });
      }
    } else {
      // set some state to say that user hasn't been found and you're not authenticated
      this.setState({
        resultMessage: "Wrong credentials have been entered",
      });
    }
  };

  onInputChange = (event) => {
    //console.log(event.target.value) //=> print every single letter typed in
    this.setState({
      [event.target.id]: event.target.value,
      //event.target.id will know to update that particular attribute, either email or password
    });
  };

  render() {
    const { resultMessage, email, password } = this.state;
    return (
      <div className="container">
        {resultMessage && <p>{resultMessage}</p>}
        <h2>Login</h2>
        {/* Code for a form */}
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onInputChange}
          />
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
