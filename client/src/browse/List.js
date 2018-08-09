import React, { Component } from 'react';

import { Card } from 'semantic-ui-react';

import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <Card.Group>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Card.Group>
    );
  }
}
