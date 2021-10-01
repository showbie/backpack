import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}

export function <%= pascalName %>({ children, ...props }: Props) {
  return (
    <div className="" {...props}>
      {children}
    </div>
  );
}
