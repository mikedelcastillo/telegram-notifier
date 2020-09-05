const message = require('./message')
const ip = require('ip').address()

let ports = ["3000", "5000", "8000", "8080"]
let hostname = require('os').hostname()
let lines = [
    "Machine: " + hostname,
    ...ports.map(port => `http://${ip}:${port}/`),
    `ssh ${hostname}@${ip}`,
]
message(lines.join("\n"))