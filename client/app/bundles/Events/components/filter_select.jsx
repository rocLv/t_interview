import React, { PropTypes } from 'react';
import { Select } from 'antd';
const Option = Select.Option

export default class FilterSelect extends React.Component {
  constructor(props) {
    super(props)
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
          defaultValue="所有项目和日历"
        >
          {projectsOptions}
        </Select>
        <Select
          tags
          showSearch
          defaultValue="所有成员"
        >
          {membersOptions}
        </Select>
      </div>
    );
  }
}

