import React from 'react';

import logo from './assets/invegorate.png';

import { Link } from 'react-router-dom';

import { Menu, Image, Dropdown } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <div>
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
        />
        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/sign-in'
            name='sign in'
          />
          
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
        />
        <Menu.Item 
          as={Link}
          to='/consume'
          name='consume' 
        />
        <Menu.Item 
          as='a'
          href='/produce'
          name='produce' 
        />
      </Menu>
    </div>
  );
}

export default Navigation;