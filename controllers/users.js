/* GET users listing. */

exports = module.exports;
exports.getUsers = (req, res, next) => {
  res.send('get');
};
exports.postUsers = (req, res, next) => {
  res.send('post');
};

exports.putUsers = (req, res, next) => {
  res.send('put');
};
exports.delUsers = (req, res, next) => {
  res.send('del');
};

exports.err = (req, res, next) => {
  next({ code: 500, msg: 'F u' });
};
