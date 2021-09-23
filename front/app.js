const express = require("express");
const app = express();
const port = 3000;

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const portSensors = new SerialPort("/dev/cu.usbmodem101", { baudRate: 9600 });
const parser = portSensors.pipe(new Readline({ delimiter: "\n" }));

// Read the port data
portSensors.on("open", () => {
  console.log("serial port open");
});

app.set("view engine", "pug");
parser.on("data", (data) => {
  setInterval(() => {
    app.get("/", function(req, res) {
      res.render("index", { title: data });
    });
  },1000)
  
  console.log("got word from arduino:", data);
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
