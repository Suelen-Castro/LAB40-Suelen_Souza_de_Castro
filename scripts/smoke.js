const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');

const server = spawn('node', ['src/server.js'], { stdio: 'ignore' });

function stopServer(exitCode) {
  if (server.exitCode !== null || server.killed) {
    process.exit(exitCode);
    return;
  }
  server.once('exit', () => process.exit(exitCode));
  server.kill();
}

setTimeout(async () => {
  try {
    const health = await fetch('http://localhost:3000/health');
    assert.equal(health.status, 200);

    const feat = await fetch('http://localhost:3000/api/features/6', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valores: [7, 8, 9] })
    });
    assert.equal(feat.status, 200);
    const data = await feat.json();
    assert.equal(data.result.media, 8);

    console.log('Smoke test aprovado com sucesso!');
    stopServer(0);
  } catch (err) {
    console.error('Falha no smoke test:', err);
    stopServer(1);
  }
}, 2000);