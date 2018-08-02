import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './assets/invegorate.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button, Container, Menu, Segment, Image, Divider, Icon, Dropdown, Grid, List, Header} from 'semantic-ui-react';

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
          <p style={{ textAlign: 'center', margin: '1em 0 0 0' }}>
            <Image
              as={Link}
              to='/'
              src={logo} 
              size='small' 
            />
          </p>
          <Menu pointing secondary style={{ marginTop: 0, marginBottom: 0 }}>
            <Menu.Item
              as={Link}
              to='/about'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                as={Link}
                to='/sign-in'
                name='sign in'
                active={activeItem === 'sign in'}
                onClick={this.handleItemClick} />
              
              {/* <Dropdown item text='Hi, Bryce'>
                <Dropdown.Menu>
                  <Dropdown.Item>Favorites</Dropdown.Item>
                  <Dropdown.Item>Account</Dropdown.Item>
                  <Dropdown.Item>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

            </Menu.Menu>
          </Menu>

          <Menu fluid widths={3} secondary style={{ marginTop: 0, marginBottom: 0 }}>
            <Menu.Item
              as={Link}
              to='/browse'
              name='browse'
              active={activeItem === 'browse'} 
              onClick={this.handleItemClick} />
            <Menu.Item 
              as={Link}
              to='/consume'
              name='consume' 
              active={activeItem === 'consume'} 
              onClick={this.handleItemClick} />
            <Menu.Item 
              as='a'
              href='/produce'
              name='produce' 
              active={activeItem === 'produce'} 
              onClick={this.handleItemClick} />
          </Menu>
 
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
