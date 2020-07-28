import './<%= pascalName %>.scss';

import React, { Component } from 'react';

import cx from 'classnames';

interface Props {}

export class <%= pascalName %> extends Component<Props> {
  static defaultProps = {};

  render() {
    let { children, ...props } = this.props;
    let classNames = cx('<%= slugName %>');

    return (
      <div className={classNames} {...props}>{children}</div>
    );
  }
}
