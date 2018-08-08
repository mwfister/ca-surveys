const { spawn } = require('child_process')

const command = 'npm'
const args = ['start']
const options = {
  cwd: 'client',
  stdio: 'inherit',
  shell: true,
}

spawn(command, args, options)
