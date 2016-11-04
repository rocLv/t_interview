import React, { PropTypes  } from 'react';
import EventsDay from '../components/events_day'

export default class TeamEvents extends React.Component {
  constructor (props) {
    super (props)

  }

  render () {
    return (
      <div className="team-events">
        <EventsDay />
      </div>
    );
  }
}

