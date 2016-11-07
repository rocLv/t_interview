import React from 'react'

const Moment = require('moment')

export default class Event extends React.Component {
  constructor (props) {
    super (props)
  }


  render () {
    const event = this.props.event

    return (
      <div className="event event-common event-todo-add"
        id={"event-" + event.id}
      >

        <a
          href={event.from_id}
          className="from"
          target="_blank">
          <img alt={event.from.name}
            className="avatar"
            src="https://tower.im/assets/default_avatars/nightfall.jpg" />
        </a>
        <i className="icon-event"></i>

        <div className="event-main">
          <div className="event-head">
            <a
              href={"#event-" + event.id}
              className="event-created-at">
              {Moment(event.created_at).format('hh:mm')}
            </a>
            <span className="event-actor">
              <a
                href={"#event-" + event.id}
                className="link-member"
                target="_blank">
                {event.from.name}
              </a>
            </span>
            <span className="event-action">
              {event.action}
            </span>
            <span className="event-text">
              <span className="emphasize">
                <a
                  href="/projects/48db/todos/0dd9"
                  className="todo-rest"
                >
                  {event.todo.title}
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
