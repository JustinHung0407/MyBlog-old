/* GET blog listing. */
exports = module.exports;

/*exports.blog = (req, res, next) => {
  res.sendFile('../../public/blog.html');
};*/

exports.blog = (req, res, next) => {
  res.send('blog route');
  next();
  res.render('../../public/blog.html');
};

exports.cool = (req, res, next) => {
  res.send("you're so cool");
};
