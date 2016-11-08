import React, { PropTypes  } from 'react';
import EventsDay from '../components/events_day'

export default class TeamEvents extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      page: 1,
      project_id: '0',
      events: this.props.events,
      projects: this.props.projects,
      more: '加载更多内容',
      enableMore: true,
    }

  }

  fetch(params) {
    $.ajax({
      url: '/events',
      method: 'GET',
      dataType: 'json',
      data: params,
      success: (data) => {
        console.log(data)
        if (data.events.length == 0) {
          this.setState({
            more: '没有更多内容了',
            enableMore: false,
          })
        }
        this.setState({
          events: data.events,
          projects: data.projects,
          page: params.page,
        })
      }
    })
  }

  handleMore() {
    console.log('load more..')
    const page = this.state.page + 1
    if(this.state.enableMore) {
      this.fetch({page: page})
    }
  }

  render () {
    return (
      <div className="team-events">
        {this.props.events.map( (event, index) => {
          return (
             <EventsDay key={"events-day-" + index} events={event} />
          )
        })}

        <a
          onClick={this.props.handleMore}
          id="btn-load-more"
          className="over"
          style={{display: 'block', width: '150px'}}
        >
          {this.props.more}
        </a>
      </div>
    );
  }
}

