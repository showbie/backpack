import './<%= componentName %>.scss';

import React, { Component } from 'react';

import cx from 'classnames';

interface Props {}

export default class <%= componentName %> extends Component<Props> {
  static defaultProps = {}

  render() {
    let { children, ...props } = this.props;
    let classNames = cx()

    return (
      <div className={classNames} {...props}>{children}</div>
    )
  }
}
