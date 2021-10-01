import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export function <%= pascalName %>({ children, ...props }: Props) {
  return (
    <div className="" {...props}>
      {children}
    </div>
  );
}
