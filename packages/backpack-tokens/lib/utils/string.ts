export function capitalize(text: string): string {
  if (typeof text !== 'string') return '';
  return text[0].toUpperCase() + text.slice(1);
}

export function swiftVarName(
  prefix: string,
  name: string,
  label: string
): string {
  return `${prefix}${capitalize(name)}${capitalize(label)}`;
}

// module.exports = {
//   capitalize,
//   swiftVarName,
// };
