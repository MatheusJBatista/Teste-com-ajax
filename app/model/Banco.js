function Banco(connection){
  this._connection = connection;
}

Banco.prototype.findAll = function (cb) {
  this._connection().getConnection(function (err,connection) {
    if (err) {
      res.status(403)
    }
    connection.query('select * from tabela',cb,connection.release());
  })
};

Banco.prototype.insert = function (nome,cb) {
  this._connection().getConnection(function (err,connection) {
    if (err) {
      res.status(403)
    }
    connection.query('insert into tabela(nome) values(?)',[nome],cb,connection.release());
  })
}

module.exports = function () {
  return Banco
}
