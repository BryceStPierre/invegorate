import React, { Component } from 'react'

export default class Browse extends Component {

  constructor(props) {
    super(props);
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
  }

  render() {
    return (
      <div>
        <h1>Browse</h1>
      </div>
    );
  }
}
