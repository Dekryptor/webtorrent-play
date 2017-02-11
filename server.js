var http = require('http')
var ecstatic = require('ecstatic')
var st = ecstatic({root: __dirname + '/public'})

var server = http.createServer( function(req, res) {
  //res.setHeader('Access-Control-Allow-Headers', req.header.origin);
  if (req.url === '/')
    res.end('Hello I am running')
  else 
    st(req,res)
})

server.listen(8080, function() {
    console.log('listening on 8080')
})

