import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

export default function Home() {
	const [name, setName] = useState("");
	const [list, setList] = useState([]);

	const handleCommentSubmit = (e: React.FormEvent) => {
		socket.emit("room1", { post: name });
	};

  socket.on("kim", (data) => {
    console.log("message received...", data);
    setList([...list, data]);
  })
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h3>Client side</h3>
			<br />
			<input
				type="text"
				name="name"
				onChange={(e) => setName(e.target.value)}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
			/>
			<button onClick={handleCommentSubmit} className="btn border border-white px-2 py-1 rounded bg-white text-black">Send Comment</button>
      {list.map((message, index) => (
        <div key={index}>
          <li>{message.post}</li>
        </div>
      ))}
		</main>
	);
}
