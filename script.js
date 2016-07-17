module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      MemberExpression(path) {
          if (t.isIdentifier(path.node.property) && path.node.property.name === 'env'
              && t.isIdentifier(path.node.object) && path.node.object.name === 'process'
              && t.isIdentifier(path.parentPath.node.property)) {
            var envValue = process.env[path.parent.property.name];
            if (envValue) {
              path.parentPath.replaceWith(t.stringLiteral(envValue));
            }
          }
      }
    }
  }
}