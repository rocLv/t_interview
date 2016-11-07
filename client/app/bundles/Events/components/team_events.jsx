import React, { PropTypes  } from 'react';
import EventsDay from '../components/events_day'

export default class TeamEvents extends React.Component {
  constructor (props) {
    super (props)

  }

  render () {
    return (
      <div className="team-events">
        {this.props.events.map( (event, index) => {
          return (
             <EventsDay key={"events-day-" + index} events={event} />
          )
        })}
      </div>
    );
  }
}

