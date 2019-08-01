import React from 'react'
import { Link } from 'react-router-dom';

export default class EventsListContainer extends React.Component {
  render() {
    console.log(this.props.events)
    return (
      <div>
        <ul>
          {this.props.events === null ? 'Loading...' : this.props.events
          .map(event => <li><Link to={`/events/${event.id}`}>{event.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}