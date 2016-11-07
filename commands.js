"use strict";
let fs = require("fs");

module.exports = {

    pwd: function(input) {
        process.stdout.write(process.env.PWD);
        process.stdout.write("\nprompt > ");
    },

    date: function(input){

        let date = new Date();
        process.stdout.write(date.toString());
        process.stdout.write("\nprompt > ");
    },

    ls: function(input) {
        fs.readdir(".", function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            });
            process.stdout.write("prompt > ");
        });
    },

    echo: function(input) {
        process.stdout.write(input.join(" "));
        process.stdout.write("\nprompt > ");
    },

    cat: function(input) {
        input.forEach(function(file, index) {
            fs.readFile("./" + file, function(err, data) {
                if (err) throw err;
                process.stdout.write("\n" + data);
                if (index === input.length - 1) {
                    process.stdout.write("\nprompt > ");
                }
            });
        });

    },

    head: function(input){
        input.forEach(function(file, index) {
            fs.readFile("./" + file, "utf8", function(err, data) {
                if (err) throw err;

                var dataArr = data.split("\n");
                data = dataArr.splice(0,5).join("\n");
                process.stdout.write("\n" + data + "\n");
                if (index === input.length - 1) {
                    process.stdout.write("\nprompt > ");
                }
            });
        });
    },

    tail: function(input){
        input.forEach(function(file, index) {
            fs.readFile("./" + file, "utf8", function(err, data) {
                if (err) throw err;

                var dataArr = data.split("\n");
                var dataArrLength = dataArr.length;
                if(dataArrLength < 5) data = dataArr.splice(0).join("\n");
                else data = dataArr.splice(dataArrLength - 5).join("\n");
                process.stdout.write("\n" + data + "\n");
                if (index === input.length - 1) {
                    process.stdout.write("\nprompt > ");
                }
            });
        });
    },

    sort: function(input) {
        input.forEach(function(file, index) {
            fs.readFile("./" + file, "utf8", function(err, data) {
                if (err) throw err;
                var dataArr = data.split("\n");
                data = dataArr.sort().join("\n");
                process.stdout.write("\n" + data + "\n");
                if (index === input.length - 1) {
                    process.stdout.write("\nprompt > ");
                }
            });
        });
    }
};
