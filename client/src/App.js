import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import Navigation from './Navigation';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import Browse from './Browse';
import Consume from './Consume';
import Terms from './Terms';
import Privacy from './Privacy';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // activeItem: 'home'
    };
  }
  
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

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
