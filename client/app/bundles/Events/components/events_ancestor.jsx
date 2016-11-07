import React from 'react'
import Event from '../components/Event'

export default class EventsAncestor extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="events-ancestor">
        <Event event={this.props.event} />
      </div>
    );
  }
}

