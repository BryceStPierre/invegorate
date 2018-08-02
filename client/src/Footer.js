import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Icon, Grid, List, Header} from 'semantic-ui-react';


const Footer = () => {
  return (
    <div>
      <Divider />

      <Grid divided stackable textAlign='center'>
        <Grid.Row>
          <Grid.Column width={8} >
            <Header as='h4' content='Pages' />
            <List link>
              <List.Item as={Link} to='/about'>About</List.Item>
              <List.Item as={Link} to='/terms-of-use'>Terms of Use</List.Item>
              <List.Item as={Link} to='/privacy-policy'>Privacy Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8} >
            <Header as='h4' content='Services' />
            <List link>
              <List.Item as={Link} to='/browse'>Browse</List.Item>
              <List.Item as={Link} to='/consume'>Consume</List.Item>
              <List.Item as='a' href='/produce'>Produce</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />

      <p style={{ textAlign: 'center', marginBottom: '1em' }}>
        Copyright &copy; 2018 Bryce St. Pierre<br/>
        Made with <Icon color='red' name='heart' />in Ottawa.
      </p>
    </div>
  );
}

export default Footer;