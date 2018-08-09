import React, { Component } from 'react'

import { Button, Container, Menu, Input, Item, Image, Card, Icon, Dropdown, Grid, Header} from 'semantic-ui-react';

import List from './browse/List';

export default class Browse extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeItem: 'all',
      searchLoading: false
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSearch = (e) => {
    console.log(e.target.value);
  }

  componentDidMount() {
    // const { name } = this.state;

    // fetch(`/api/item/${name}`)
    //   .then(res => res.json())
    //   .then(item => {
    //     console.log(item);
    //   });

    // fetch(`/api/nutrients/${name}`)
    //   .then(res => res.json())
    //   .then(nutrients => {
    //     console.log(nutrients);
    //   });


    this.searchInput.focus();
  }

  render() {
    const { activeItem, searchLoading } = this.state;

    return (
      <div>
        <h1>Browse</h1>

        <Input 
          transparent
          icon='search' 
          placeholder='Find an item...' 
          loading={searchLoading} 
          ref={(input) => { this.searchInput = input; }} 
          style={{ marginTop: '1em', marginBottom: '2em' }}
          onKeyUp={this.handleSearch}
        />

        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={3} >
              <Menu text vertical>
                <Menu.Item header style={{ marginTop: 0 }}>View</Menu.Item>
                <Menu.Item
                  name='all'
                  active={activeItem === 'all'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='popular'
                  active={activeItem === 'popular'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='categories'
                  active={activeItem === 'categories'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='colors'
                  active={activeItem === 'colors'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column width={13} >
              <Header as='h5' content='CONTENT' style={{ marginTop: 0 }}/>

              <List />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
