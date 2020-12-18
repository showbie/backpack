import toXast from 'hast-util-to-xast';
import { parse } from 'svg-parser';
import toXml from 'xast-util-to-xml';

export async function svge(svg: string): Promise<string> {
  let hast = parse(svg);
  // console.log(svgHAST);
  // {
  //   type: 'root',
  //   children: [
  //     {
  //       type: 'element',
  //       tagName: 'svg',
  //       properties: [Object],
  //       children: [Array],
  //       metadata: ''
  //     }
  //   ]
  // }
  let xast = toXast(hast);
  let newSvg = toXml(xast);

  return newSvg;
}
