import React, { PropTypes } from 'react';
import FilterSelect from '../components/filter_select'
import TeamEvents from '../components/team_events'

export default class HelloWorld extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name,
      projects: this.props.projects,
      members: this.props.members,
    };
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <FilterSelect
          name={this.state.name}
          updateName={e => this.updateName(e)}
          projects={this.state.projects}
          members={this.state.members}
        />

        <TeamEvents events={this.props.events} />
      </div>
    );
  }
}
