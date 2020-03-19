const Shell = require("node-powershell");

const ps = new Shell({ executionPolicy: "Bypass", noProfile: true });

if (process.platform === "win32") {
  ps.addCommand(
    `Copy-Item -Force -Recurse ./.docz/public/* -Destination./docs`
  );
  ps.invoke()
    .then(response => {
      console.log(response);
      process.exit()
    })
    .catch(error => {
      console.log(error);
    });
} else {
  console.log("haha");
}
