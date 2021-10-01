import React, { Component } from 'react';

export interface Props {
  children: React.ReactNode;
}

export class <%= pascalName %> extends Component<Props> {
  static defaultProps = {};

  render() {
    const { children, ...props } = this.props;

    return (
      <div className="" {...props}>
        {children}
      </div>
    );
  }
}
