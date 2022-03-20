const http = require('http');
const fs = require('fs')
let i = 0;
let j = 50;
const server = http.createServer((request, response) => {
	//	console.log(request)
	console.log('received' + i++);
	response.setHeader('Content-Type', 'text/html');
	if (request.url === '/')
	{
		response.write(`<html>
							<head>
							<title>
							Wassssuuup
							</title>
							</head>
							<body
							<h1>Look at me, Im the captain now ${i}</h1>
							<form action="/message" method="post">
							<input type="text" name="message">
							<button type="submit"> Send </button>
							</form>
							<form action="/message" method="GET">
							<input type="text" name="message2">
							<button type="submit"> Send </button>
							</form>
							</body>
						</html>`)
		return (response.end())
				}
	else if (request.url === '/message' && request.method === 'POST') {
			const body = [];
			request.on('data', (chunk) => {
				//console.log(chunk.toString(),chunk);
				//fs.writeFileSync('data', chunk)
				body.push(chunk);
			})
			return request.on('end',()=>{
				const message_concatenated = Buffer.concat(body).toString();
				fs.writeFileSync('data', message_concatenated.split('=')[1]);		
				response.statusCode = 302;
				response.setHeader('Location', '/lol');
				response.end();
			})
		
			
		


		// else
		// response.write(`<html><body><p>Aight boss</p> <form action="/" method = "post" target="_blank"> <button type="submit"> go back </button> </form></body></html>`)
	}
	else if(request.url === '/lol' || request.url === '/message')
	{
		if(request.method === 'POST')
		{
			if(j == 0)
			{
				response.statusCode = 302;
				response.setHeader('Location','/brokeout')
				return response.end()
			}
			response.write('<html>');
			response.write('<head><title>My First Page</title><head>');
			response.write(`<body><h1>No Where to go :) </h1><p> knocks left to break the door ${j--} </p></body>`);
			response.write('<form action="/lol" method ="POST"><button type="submit">Go back</button></form>');
			response.write('</html>');
			return response.end();
		}
		response.write('<html>');
			response.write('<head><title>My First Page</title><head>');
			response.write('<body><h1>Infos received</h1><h2>Like hanging around here?</h2></body>');
			response.write('<form action="/lol" method ="POST"><button type="submit">Go back</button></form>');
			response.write('</html>');
		return response.end();
	}
	else if(request.url === '/brokeout')
	{
		response.write(`<body><h1>Door broken T-T</h1> <form action="/" method ="POST"><button type="submit">Close the door</button></form> </body>`);
		j = 50;
		return response.end();
	}
			response.write('<html>');
			response.write('<head><title>My First Page</title><head>');
			response.write('<body><h1>Page not Found!</h1></body>');
			response.write('<form action="/" method ="POST"><button type="submit">Go back</button></form>');
			response.write('</html>');
			response.end();
}
);

server.listen(3000)
