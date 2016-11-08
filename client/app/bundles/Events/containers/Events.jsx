import React, { PropTypes } from 'react';
import FilterSelect from '../components/filter_select'
import TeamEvents from '../components/team_events'

export default class HelloWorld extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      name:           this.props.name,
      events:         this.props.events,
      members:        this.props.members,
      projects:       this.props.projects,
      filter_project: 0,
      filter_member:  0,
      enableMore:     true,
      more:           '加载更多内容',
      page:           1,
    };
  }

  updateName(name) {
    this.setState({ name });
  }

  handleProjectSelectChange (project_id) {
    console.log('handle filter select: ', project_id)
    this.setState({
      filter_project: project_id
    })

    this.fetch({
      page: this.state.page,
      projects: this.state.filter_project,
      members: this.state.filter_member,
    })
  }

  handleMemberSelectChange (member_id) {
    console.log('handle filter select: ', member_id)
    this.setState({
      filter_member: member_id
    })

    this.fetch({
      page: this.state.page,
      projects: this.state.filter_project,
      members: this.state.filter_member,
    })
  }

  handleMore() {
    console.log('load more..')
    const page = this.state.page + 1
    if(this.state.enableMore) {
      this.fetch({
        page: page,
        projects: this.state.filter_project,
        members: this.state.filter_member,
      })
    }
  }

  fetch(params) {
    $.ajax({
      url: '/events',
      method: 'GET',
      dataType: 'json',
      data: params,
      success: (data) => {
        console.log('ajax data:', data)
        if (data.events.length == 0) {
          this.setState({
            more: '没有更多内容了',
            enableMore: false,
          })
        }
        this.setState({
          events: data.events,
          members: data.members,
          projects: data.projects,
        })
      }
    })
  }

  render() {
    return (
      <div>
        <FilterSelect
          name={this.state.name}
          projects={this.state.projects}
          members={this.state.members}
          handleProjectChange={this.handleProjectSelectChange.bind(this)}
          handleMemberChange={this.handleMemberSelectChange.bind(this)}
        />

      <TeamEvents
        events={this.state.events}
        enableMore={this.state.enableMore}
      />
      </div>
    );
  }
}
