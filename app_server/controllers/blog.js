/* GET blog listing. */
exports = module.exports;

/*exports.blog = (req, res, next) => {
  res.sendFile('../../public/blog.html');
};*/

exports.blog = (req, res, next) => {
  res.set('Content-Type', 'text/html');
  res.sendfile('./app_server/views/blog.html');
};

exports.cool = (req, res, next) => {
  res.send("you're so cool");
};
