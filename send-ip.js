const message = require('./message')
const ip = require('ip').address()
const os = require('os')

let ports = ["3000", "5000", "8000", "8080"]
let username = os.userInfo().username
let hostname = os.hostname()

let lines = [
    "Machine: " + hostname,
    ip,
    ...ports.map(port => `http://${ip}:${port}/`),
    `ssh ${username}@${ip}`,
]
message(lines.join("\n"))