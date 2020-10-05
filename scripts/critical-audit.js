// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require("child_process");

exec("yarn audit", (error, stdout) => {
  process.stdout.write(stdout);
  if (error && error.code >= 16) {
    throw new Error("Critical vulnerabilities found!");
  }
});
