import React, { useRef } from 'react';
import Tooltip from './Tooltip';
// import Tooltip from './Tooltip';
// import '@reach/tooltip/styles.css';

let name = 'Basic (TS)';

function Example() {
  const coolRef = useRef(null);
  return (
    <div>
      <Tooltip id="wow" label="Notifications">
        <button style={{ fontSize: 25 }} ref={coolRef}>
          <span aria-hidden>🔔</span>
        </button>
      </Tooltip>
      <Tooltip label="Settings">
        <button style={{ fontSize: 25 }}>
          <span aria-hidden>⚙️</span>
        </button>
      </Tooltip>
      <Tooltip label="Your files are safe with us" DEBUG_STYLE>
        <button style={{ fontSize: 25 }}>
          <span aria-hidden>💾</span> Save
        </button>
      </Tooltip>

      <div style={{ float: 'right' }}>
        <Tooltip label="Notifications" aria-label="3 Notifications">
          <button style={{ fontSize: 25 }}>
            <span>🔔</span>
            <span>3</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

Example.story = { name };
export const Comp = Example;
export default { title: 'Tooltip' };
