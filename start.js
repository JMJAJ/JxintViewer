const { exec } = require('child_process');

// Start server.js and proxyServer.js concurrently
const serverProcess = exec('node server.js');
// const proxyProcess = exec('node server_whoami.js');

// Log output of each process
serverProcess.stdout.on('data', data => console.log('[server.js]:', data));
serverProcess.stderr.on('data', data => console.error('[server.js ERROR]:', data));
/*
proxyProcess.stdout.on('data', data => console.log('[server_whoami.js]:', data));
proxyProcess.stderr.on('data', data => console.error('[server_whoami.js ERROR]:', data));
*/

// Handle process exit
process.on('exit', () => {
    serverProcess.kill();
    proxyProcess.kill();
});
