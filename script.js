module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      MemberExpression(path) {
          var firstPart = path.node.object;
          var secondPart = path.node.property;
          var thirdPart = path.parentPath.node.property;
          if (t.isIdentifier(secondPart) && secondPart.name === 'env'
              && t.isIdentifier(firstPart) && firstPart.name === 'process'
              && (t.isIdentifier(thirdPart) || t.isStringLiteral(thirdPart))) {
              var envValue;

              if (t.isStringLiteral(thirdPart)) {
                  envValue = process.env[thirdPart.value];
              }
              else {
                  envValue = process.env[thirdPart.name];
              }
              if (envValue && !t.isAssignmentExpression(path.parentPath.parentPath.node)) {
                  path.parentPath.replaceWith(t.stringLiteral(envValue));
              }
          }
      }
    }
  }
}