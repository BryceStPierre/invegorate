import React, { Component } from 'react';

import { Button, Icon } from 'semantic-ui-react';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
        of Lorem Ipsum.</p>

      <Button color='twitter' as='a' target='_blank' href='https://twitter.com/BryceStPierre'>
        <Icon name='twitter' /> Twitter
      </Button>
      <Button color='linkedin' as='a' target='_blank' href='https://www.linkedin.com/in/brycestpierre'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
      <Button color='youtube' as='a' target='_blank' href='https://www.youtube.com/channel/UClTmDivmNxjuH74_Y6MuJ3w'>
        <Icon name='youtube' /> YouTube
      </Button>
      <Button color='black' as='a' target='_blank' href='https://github.com/BryceStPierre'>
        <Icon name='github' /> GitHub
      </Button>
    </div>
  );
}

export default About;