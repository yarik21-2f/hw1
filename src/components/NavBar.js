import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>PersonList</a>
            </li>
            <li>
                <a href='todo'>Todo</a>
            </li>
            <li>
                <a href='footer'>Footer</a>
            </li>
            <li>
                <a href='header'>Header</a>
            </li>
        </ul>
      </div>
    )
  }
}
