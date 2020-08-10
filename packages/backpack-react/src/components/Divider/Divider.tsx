import React, { ReactElement } from 'react';

export function Divider(): ReactElement {
  return (
    <div className="relative">
      <div className="absolute w-full h-px bg-divider" />
    </div>
  );
}
