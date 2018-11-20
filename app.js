var app = require('./config/server.js');
var port = process.env.PORT || 8000

app.listen(port,function () {
  console.log('app rodando na porta %s',port);
})
