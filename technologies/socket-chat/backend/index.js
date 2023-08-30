const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});
io.on("connection", (socket) => {
	console.log("a user is connected");
	socket.on("room1", function (data) {
		console.log("data is", data);
		io.emit("kim", data);
	});
});

server.listen(8000, () => {
	console.log("server is running on port 8000");
});
