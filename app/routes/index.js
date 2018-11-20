module.exports = function (app) {
  app.get('/',function (req,res) {
    app.app.controller.index.index(app,req,res);
  })
  app.post('/',function (req,res) {
    app.app.controller.index.postIndex(app,req,res);
  })
};
