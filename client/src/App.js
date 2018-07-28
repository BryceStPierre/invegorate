import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './assets/invegorate.png';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Button, Container, Menu, Segment, Image, Divider } from 'semantic-ui-react';


import Browse from './Browse';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeItem: 'home'
    };
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    // fetch('/api/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Container style={{ marginTop: '3em' }}>

          <Image src={logo} size='small' centered />

          <Menu pointing secondary stackable>
            <Menu.Item 
              as={Link}
              to='/'
              name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick} 
            />
            <Menu.Item
              as={Link}
              to='/about'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/topics'
              name='topics'
              active={activeItem === 'topics'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                as={Link}
                to='/logout'
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

          <Segment>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/browse/:name" component={Browse}/>
          </Segment>

        </Container>
      </Router>
    );
  }
}

export default App;
