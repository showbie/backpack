import * as React from 'react';

import <%= pascalName %> from './<%= pascalName %>';

export default {
  title: 'BaseComponents|<%= pascalName %>',
  component: <%= pascalName %>,
};

export const base = () => (
  <>
    <<%= pascalName %>>Default</<%= pascalName %>>
    <div className="mt-4">
      <<%= pascalName %>>Hovered</<%= pascalName %>>
    </div>
    <div className="mt-4">
      <<%= pascalName %>>Disabled</<%= pascalName %>>
    </div>
  </>
);
