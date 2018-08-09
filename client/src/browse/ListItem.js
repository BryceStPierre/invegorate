import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Item, Card, Button, Image } from 'semantic-ui-react';

import placeImage from '../assets/image.png';

const ListItem = () => {
  return (
    <Card style={{width:'250px'}}>
      <Card.Content>
        <Image 
          floated='left' 
          size='tiny' 
          src={placeImage} 
          style={{ marginBottom: 0 }}
        />
        <Card.Header>Title</Card.Header>
        <Card.Meta style={{ color: '#000' }}>Scientific Name</Card.Meta>
        <Card.Meta>Category</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ListItem;