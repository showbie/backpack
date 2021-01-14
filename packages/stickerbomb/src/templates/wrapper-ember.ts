import { pascalCase } from 'change-case';
import dedent from 'dedent';

export function emberWrapper(
  svgComponentName: string,
  iconName: string
): string {
  let icon = pascalCase(iconName);
  let svg = pascalCase(svgComponentName);

  return dedent`
  import { setComponentTemplate } from '@ember/component'
  import Component from '@glimmer/component'
  import { hbs } from 'ember-cli-htmlbars'

  class ${icon} extends Component {}

  export default setComponentTemplate(
    hbs\`
    <${icon}::${svg} ...attributes />
    \`,
    ${icon},
  )
`;
}
