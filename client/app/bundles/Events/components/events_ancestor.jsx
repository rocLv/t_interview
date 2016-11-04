import React from 'react'
import Event from '../components/Event'

export default class EventsAncestor extends React.Component {
  render () {
    return (
          <div className="events-ancestor" ancestor-guid="48db">
            <h5 className="events-ancestor-title">
              <a href="/projects/48db" target="_blank" title="老麻来啦">老麻来啦</a>
            </h5>
            <Event />
          </div>
    );
  }
}

