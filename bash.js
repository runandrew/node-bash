"use strict";

let commands = require("./commands");



// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", function (data) {
    let cmd = data.toString().trim(); // remove the newline
    let cmdArr = cmd.split(" ");
    commands[cmdArr[0]](cmdArr.splice(1));
});
