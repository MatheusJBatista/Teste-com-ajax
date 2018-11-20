module.exports = function (app) {
  app.get('/getAll',function (req,res) {
    app.app.controller.getAll.getAll(app,req,res);
  })
};
