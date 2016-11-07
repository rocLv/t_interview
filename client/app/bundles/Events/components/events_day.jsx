import React, { PropTypes  } from 'react';
import EventsAncestor from '../components/events_ancestor'

export default class EventsDay extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="events-day">
        <h4 className="events-day-title">今</h4>
        <div className="events-day-content">
          {this.props.events.map( (event, index)  => {
            return (
              <EventsAncestor
                key={"event-" + event.id}
                event={event}
              />
            )
          })

          }
        </div>
      </div>
    );
  }
}

