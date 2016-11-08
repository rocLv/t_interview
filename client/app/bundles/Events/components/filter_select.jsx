import React, { PropTypes } from 'react';
import { Select } from 'antd';
const Option = Select.Option

export default class FilterSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(value) {
    this.props.handleProjectChange(value)
  }

  handleMemberChange(value) {
    this.props.handleMemberChange(value)
  }

  render () {
    const projectsOptions = this.props.projects.map((project) => (
                                       <Option key={project.id.toString()}>
                                         {project.name}
                                       </Option>)
                                      )

    const membersOptions = this.props.members.map((member) => (
                                       <Option key={member.id.toString()}>
                                         {member.name}
                                       </Option>)
                                      )
    return (
      <div>
        <span>筛选状态：</span>
        <Select
          tags
          showSearch
          notFoundContent=""
          optionFilterProp="children"
          style={{ width: 200  }}
          defaultValue="0"
          onChange={this.handleChange.bind(this)}
        >
          {projectsOptions}
        </Select>
        <Select
          tags
          showSearch
          defaultValue="0"
          onChange={this.handleMemberChange.bind(this)}
        >
          {membersOptions}
        </Select>
      </div>
    );
  }
}

