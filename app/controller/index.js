module.exports.index = function (app,req,res) {
  res.render('./assets/html/index')
};

module.exports.postIndex =function (app,req,res) {
  if (req.body.name.length <= 5000) {
    var connection = app.config.dbConnection;
    var banco = new app.app.model.Banco(connection);

    var insert = function () {
      return new Promise(function (resolve,reject) {
        banco.insert(req.body.name,function (error,results,fields) {
          if (error) {
            res.sendStatus(403)
          }
          resolve(200);
        })
      })
    }

    insert().then(function (dados) {
      res.sendStatus(200)
    })
  }else {
    res.sendStatus(401);
  }
  console.log(req.body);
}
