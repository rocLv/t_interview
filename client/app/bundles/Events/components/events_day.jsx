import React, { PropTypes  } from 'react';
import EventsAncestor from '../components/events_ancestor'

const moment = require('moment')
moment.locale('zh-cn');

export default class EventsDay extends React.Component {
  constructor (props) {
    super (props)
  }

  dateTitle (date) {
    const day = date.calendar(null, {
      sameDay: '今',
      lastDay: '昨',
      sameElse: 'MM/DD'
    })

    const date_title = date.format('MM/DD')

    console.log(moment().diff(date, 'days'))
    if (moment().diff(date, 'days') >= 1) {
      return (
        <h4 className="events-day-title">
          <span className="date">{date_title}</span>
          <span className="day">{date.format('ddd')}</span>
        </h4>
      )
    } else {
      return (
        <h4 className="events-day-title">
          {day}
        </h4>
      )
    }
  }

  render () {
    const date = moment(this.props.events[0].created_at)

    return (
      <div className="events-day">
        {this.dateTitle(date)}
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

