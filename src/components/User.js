import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.firstName}!</h2>
      </div>
    )
  }
}
