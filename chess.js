"use strict"

const http = require('http');

const ROWS = 8;
const COLS = 8;
const BOX = "#";

const rowPattern =`${BOX} `.repeat(COLS/2);

const board = () => {
	console.time();
	const twoRowPattern = rowPattern + '\n ' + rowPattern.trim() +'\n';
	console.timeEnd();
	return twoRowPattern.repeat(ROWS/2);
}


/*
// checks if the space needs a "" or a #.
const checkLoop = () => {
	console.time();
 	let board = 8;
	let h = " ";

	for(let i = 0; i < board; i++) { //row
		for(let j = 0; j < board; j++) { //cloumn
			h += (i + j) % 2 == 0 ? " " : "#";
        	};
		h += "\n";
	};
	console.timeEnd();
	return h;
};
*/
const html = () => {
	return `<!Doctype html><html>
        <head> <meta charset = utf 8>
        <title></title> </head>
	<body> <pre>${board()}</pre> </body></html>`
}; 
	
        

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {

// Set a response type of plain text for the response
res.writeHead(200, {'Content-Type': 'text/html'});

// Send back a response and end the connection
res.end(html());
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

