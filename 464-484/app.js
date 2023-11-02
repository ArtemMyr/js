import http from 'http';

http.createServer();

http.createServer((request, response) => {
	response.setHeader('Cache-Control', 'no-cache');
	response.statusCode = 200;
	response.write('hello world');
	response.end();
}).listen(3000);