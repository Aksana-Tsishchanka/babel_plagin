module.exports = function(babel) {
  var t = babel.types;
  var isProcessEnvAvailable;
  var isProcess = false;
  var isEnv = false;

  if (process.env.NODE_ENV) {
    isProcessEnvAvailable = true;
    var envName = 'NODE_ENV';
  };

  return {
    visitor: {
        Identifier(path) {
          if (path.node.name == 'process') {
            isProcess = true;

          } else if (path.node.name == 'env') {
            isEnv = true;
          } else if (isEnv && isProcess && isProcessEnvAvailable && path.node !== 'env' ) {
            path.node.name = envName;
          }
        }
    }
  };
};