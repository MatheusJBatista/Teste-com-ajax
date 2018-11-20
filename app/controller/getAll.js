module.exports.getAll = function (app,req,res) {
  var connection = app.config.dbConnection;
  var banco = new app.app.model.Banco(connection);

  async function getAll() {
    return new Promise(function (resolve,reject) {
      banco.findAll(function (error,results,fields) {
        if (error) {
          res.sendStatus(403);
        }
        console.log(results);
        resolve(results)
        // res.send(results)
      })
    })
  }

  getAll().then(function (data) {
    res.send(data)
  })
};
