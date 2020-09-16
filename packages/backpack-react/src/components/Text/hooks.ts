import cx from 'clsx';

export interface UseTextProps {
  family?: 'sans' | 'display';
  size?: '';
  weight?: '';
  leading?: '';
  color?: '';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export function useText({
  family,
  // size,
  // weight,
  // leading,
  // color,
  align,
}: UseTextProps) {
  const styles = cx({
    'font-sans': family === 'sans',
    'font-display': family === 'display',

    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right',
    'text-justify': align === 'justify',
  });

  return styles;
}
