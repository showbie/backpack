import './<%= pascalName %>.scss';

import * as React from 'react';

import cx from 'classnames';

interface Props {}

export function <%= pascalName %>(props: Props) {
  let classNames = cx('<%= slugName %>');

  return (
    <div className={classNames} {...props}>{children}</div>
  )
}
