process.stdout.write('Welcome to Holberton School, what is your name?\n');

const prefixStdin = process.stdin
const prefixStdout = process.stdout
if (prefixStdin.isTTY) {
  prefixStdin.on('data', (data) => {
    prefixStdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  prefixStdin.on('data', (data) => {
    prefixStdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    prefixStdout.write('This important software is now closing\n');
  });
}
