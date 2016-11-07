import React, { PropTypes } from 'react';
import FilterSelect from '../components/filter_select'
import TeamEvents from '../components/team_events'

export default class HelloWorld extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { name: this.props.name };
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
        />

        <TeamEvents events={this.props.events} />
      </div>
    );
  }
}
