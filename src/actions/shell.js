const shell = require('shelljs');

/**
 * Execute shell action
 *
 * @param {Object} command - Command data for given action
 * @param {Object} options
 * @return {Function|null} - Function that returns a promise or null
 */
function shellAction(command, options) {
  const { verbose } = options;
  return () =>
    new Promise((resolve, reject) => {
      if (verbose) {
        console.log(`  - FileManagerPlugin: Executing shell command: ${command.command}`);
      }
      shell.exec(command.command, command.options, (code, stdout, stderr) => {
        if (code !== 0) return reject(new Error(stderr));
        return resolve(stdout);
      });
    });
}

export default shellAction;
