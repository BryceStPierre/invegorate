import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './assets/invegorate.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button, Container, Menu, Segment, Image, Divider, Icon, Dropdown, Grid, List, Header} from 'semantic-ui-react';

import Navigation from './Navigation';

import Browse from './Browse';
import Consume from './Consume';

import Footer from './Footer';

import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import Terms from './Terms';
import Privacy from './Privacy';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeItem: 'home'
    };
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Container>
          <Navigation />
          <Segment basic style={{ marginTop: 0 }}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/consume" component={Consume}/>
            <Route path="/terms-of-use" component={Terms}/>
            <Route path="/privacy-policy" component={Privacy}/>
          </Segment>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
