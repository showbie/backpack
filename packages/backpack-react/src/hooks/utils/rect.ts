import { useRef, useState } from 'react';

import { useIsomorphicLayoutEffect } from '../../utils';
import observeRect from '../../utils/observe-rect';

export function useRect<T extends HTMLElement = HTMLElement>(
  nodeRef: React.RefObject<T>,
  observe = true,
  onChange?: (rect: DOMRect) => void
): null | DOMRect {
  let initialRectSet = useRef(false);
  let [rect, setRect] = useState<DOMRect | null>(null);
  let observerRef = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    let cleanup = () => {
      observerRef.current && observerRef.current.unobserve();
    };

    if (!nodeRef.current) {
      console.warn('You need to place the ref');
      return cleanup;
    }

    if (!observerRef.current) {
      observerRef.current = observeRect(nodeRef.current, (rect: DOMRect) => {
        onChange && onChange(rect);
        setRect(rect);
      });
    }

    if (!initialRectSet.current) {
      initialRectSet.current = true;
      setRect(nodeRef.current.getBoundingClientRect());
    }

    observe && observerRef.current.observe();

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, onChange]);

  return rect;
}
