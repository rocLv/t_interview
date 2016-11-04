import React, { PropTypes } from 'react';

export default class FilterSelect extends React.Component {
  render () {
    return (
      <div>
        <span>筛选状态：</span>
        <select defaultValue="A">
          <option value="A">所有项目、日历和周报</option>
          <option value="B">laomalaila</option>
          <option value="C">tower</option>
        </select>
        <select defaultValue="A">
          <option value="A">所有成员</option>
          <option value="B">成员一</option>
        </select>
      </div>
    );
  }
}

