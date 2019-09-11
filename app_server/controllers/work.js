/* GET work listing. */
exports = module.exports;

/*exports.blog = (req, res, next) => {
  res.sendFile('../../public/blog.html');
};*/

exports.work = (req, res, next) => {
  //res.send('work route');
  res.render('././blog.html');
};

exports.cool = (req, res, next) => {
  res.send("you're so cool");
};
