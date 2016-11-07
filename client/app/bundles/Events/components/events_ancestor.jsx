import React from 'react'
import Event from '../components/Event'

export default class EventsAncestor extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const project = this.props.event.todo.project
    return (
      <div className={ this.props.visible && "events-ancestor" }>
        { this.props.visible && 
          <h5 className="events-ancestor-title" id={"project-" + project.id}>
            <a
              href={"/projects/" + project.id}
              target="_blank"
              title={project.name}>
              {project.name}
            </a>
          </h5>
        }
        <Event event={this.props.event} />
      </div>
    );
  }
}

