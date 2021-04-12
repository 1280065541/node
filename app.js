const http = require('http');

//处理GET
// const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//     console.log('method:', req.method);
//     const url = req.url;
//     console.log('url: ', url);
//     req.query = querystring.parse(url.split('?')[1]);
//     console.log('query: ', req.query);
//     res.end(JSON.stringify(req.query));
// });

//处理POST
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        //req格式数据
        console.log('content-type: ', req.headers['content-type']);
        //接受数据
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk.toString();
        });
        req.on('end', () => {
            console.log('postData: ', postData);
            res.end('hello world!');
        });
    }
});

server.listen(8000);
console.log('ok');
