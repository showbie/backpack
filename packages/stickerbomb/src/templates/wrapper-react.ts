import dedent from 'dedent';

export function reactWrapper(
  svgComponentName: string,
  iconName: string
): string {
  return dedent`
  import * as React from 'react';

  import { Box } from '~shared/components/Box';

  import useIcon, { UseIconProps } from '../useIcon';
  import { ${svgComponentName} } from './${svgComponentName}';

  export type ${iconName}Props = UseIconProps;

  export function ${iconName}(props: ${iconName}Props) {
    let iconProps = useIcon(props);

    return <Box tagName={${svgComponentName}} {...iconProps} />;
  };
`;
}
