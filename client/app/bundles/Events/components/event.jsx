import React from 'react'

export default class Event extends React.Component {
  render () {
    return (

            <div className="event event-common event-todo-add"
              id="event-87926720"
              ancestor-guid="48db"
              ancestor-name="老麻来啦"
              ancestor-url="/projects/48db">

              <a
                href="/members/593c"
                className="from"
                target="_blank">
                <img alt="王强生"
                  className="avatar"
                  src="https://tower.im/assets/default_avatars/nightfall.jpg" />
              </a>
              <i className="icon-event"></i>

              <div className="event-main">
                <div className="event-head">
                  <a href="#event-87926720" created-at="2016-11-03T17:14:15+08:00" className="event-created-at">17:14</a>
                  <span className="event-actor">
                    <a href="/members/593c" className="link-member" target="_blank">王强生</a>
                  </span>
                  <span className="event-action">
                    创建了任务
                  </span>
                  <span className="event-text">
                    <span className="emphasize">
                      <a href="/projects/48db/todos/0dd9" className="todo-rest" stack="true">后端测试</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
    )
  }
}
