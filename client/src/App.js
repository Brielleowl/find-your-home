import React, { Component } from 'react';
import Main from './component/mainPage/Main'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router';
import Apartment from './component/Apartment/Apartment'
import MenuBar from './component/mainPage/MenuBar';
import Condo from './component/Condo/Condo'
import House from './component/House/House';
import Townhomes from './component/TownHomes/Townhomes';
import SignUp from './component/User/SignUp';
import SignIn from './component/User/SignIn';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render() {
    return (
      <Router>
        <div className="App">
        
         <Route path="/"  component={MenuBar}/>
         <Route path="/main" exact component={Main}/>

         <Route path="/apartment" exact component={Apartment}
         />
         <Route path="/condo" exact component={Condo}
         />
          <Route path="/townhomes" exact component={Townhomes}
         />
          <Route path="/house" exact component={House}
         />
         <Route path="/signup" exact component={SignUp}
         />
         <Route path="/signin" exact component={SignIn}
         />
          <p className="App-intro">;{this.state.apiResponse}</p>
        </div>
      </Router>

      
    );
  }
}

export default App;
