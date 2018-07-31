import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './assets/invegorate.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button, Container, Menu, Segment, Image, Divider, Icon, Dropdown, Grid, List, Header} from 'semantic-ui-react';


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

const Topic = () => (
  <div>
    <h3>Topic a</h3>
  </div>
);

const Topic1 = () => (
  <div>
    <h3>Topic1</h3>
  </div>
);

const Topic2 = () => (
  <div>
    <h3>Topic2</h3>
  </div>
);

const Topic3 = () => (
  <div>
    <h3>Topic3</h3>
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
      <li>
        <Link to={`${match.url}/topic1`}>
          1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic2`}>
          2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic3`}>
          3
        </Link>
      </li>
    </ul>

    {/* <Route path={`${match.path}/:topicId`} component={Topic}/> */}
    <Route path={`${match.path}/topic1`} component={Topic1}/>
    <Route path={`${match.path}/topic2`} component={Topic2}/>
    <Route path={`${match.path}/topic3`} component={Topic3}/>
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
        <Container>
          <div  style={{marginTop: '1em'}}>
          <Image src={logo} size='small' centered />

          <Menu pointing secondary style={{ marginTop: 0, marginBottom: 0 }}>
            <Menu.Item
              as={Link}
              to='/about'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            {/* <Menu.Item
              as={Link}
              to='/topics'
              name='topics'
              active={activeItem === 'topics'}
              onClick={this.handleItemClick}
            /> */}
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
              as={Link}
              to='/produce'
              name='produce' 
              active={activeItem === 'produce'} 
              onClick={this.handleItemClick} />
          </Menu>
 
          <Segment basic style={{ marginTop: 0 }}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/browse/:name" component={Browse}/>
          </Segment>

          <Divider />

          <Grid divided stackable textAlign='center'>
            <Grid.Row>
              <Grid.Column width={8} >
                <Header as='h4' content='Pages' />
                <List link>
                  <List.Item as='a'>About</List.Item>
                  <List.Item as='a'>Terms of Use</List.Item>
                  <List.Item as='a'>Privacy Policy</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8} >
                <Header as='h4' content='Services' />
                <List link>
                  <List.Item as='a'>Browse</List.Item>
                  <List.Item as='a'>Consume</List.Item>
                  <List.Item as='a'>Produce</List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column> */}
            </Grid.Row>
          </Grid>

          <Divider />
          <p style={{textAlign:'center', marginBottom:'1em'}}>
            Copyright &copy; 2018 Bryce St. Pierre<br/>
            Made with <Icon color='red' name='heart' />in Ottawa.
          </p>
                
        </div>
        </Container>
      </Router>
    );
  }
}

export default App;
