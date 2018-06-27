import React, { Component } from 'react'

export default class Browse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.match.params.name
    };
  }

  componentDidMount() {
    const { name } = this.state;

    fetch(`/api/item/${name}`)
      .then(res => res.json())
      .then(item => {
        console.log(item);
      });

    fetch(`/api/nutrients/${name}`)
      .then(res => res.json())
      .then(nutrients => {
        console.log(nutrients);
      });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
