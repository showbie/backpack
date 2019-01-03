function capitalize(text) {
  if (typeof text !== 'string') return '';
  return text[0].toUpperCase() + text.slice(1);
}

function swiftVarName(name, label) {
  return `sb${capitalize(name)}${capitalize(label)}`;
}

module.exports = {
  capitalize,
  swiftVarName,
};
