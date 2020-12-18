import toXast from 'hast-util-to-xast';
import { parse } from 'svg-parser';
import toXml from 'xast-util-to-xml';

export async function svge(svg: string): Promise<string> {
  let hast = parse(svg);

  /**
   * Compiles to
   * {{#if @title}}<title id={{@titleId}}>{{@title}}</title>{{/if}}
   */
  let dynamicTitle = [
    { type: 'text', value: '\n{{#if @title}}' },
    {
      type: 'element',
      tagName: 'title',
      properties: { id: '{{@titleId}}' },
      children: [{ type: 'text', value: '{{@title}}' }],
    },
    { type: 'text', value: '{{/if}}\n' },
  ];

  /**
   * 1. Check if <title> node aready exists
   * 2. Remove existing element
   * 3. Add dynamic title node
   * 4. Add ...attributes to root svg node
   */
  // @ts-expect-error -- Typing doesn't expect children to exist on root node.
  hast.children[0].children.unshift(...dynamicTitle);

  let xast = toXast(hast);
  let newSvg = toXml(xast);

  return newSvg;
}
