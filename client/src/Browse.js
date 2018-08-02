import React, { Component } from 'react'

import { Button, Container, Menu, Input, Segment, Image, Divider, Icon, Dropdown, Grid, List, Header} from 'semantic-ui-react';

export default class Browse extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeItem: 'all'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <h1>Browse</h1>

        <Input fluid icon='search' placeholder='Search...' style={{ marginBottom: '1em' }}/>

        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4} >
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
            <Grid.Column width={12} >
              <Header as='h4' content='Content' style={{ marginTop: 0 }}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
