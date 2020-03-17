import React, { Component } from 'react'

import ExampleComponent from 'example-react-package'

const ExampleComponent2 = ExampleComponent.ExampleComponent;

export default class App extends Component {
  render () {
    console.log(ExampleComponent.generate_php());
    return (
      <div>
        <ExampleComponent2 text='Modern React component module' />
      </div>
    )
  }
}
