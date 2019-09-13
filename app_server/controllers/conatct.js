/* GET blog listing. */
exports = module.exports;
const Post = require('../models/blog.js');

exports.blog = (req, res, next) => {
  res.set('Content-Type', 'text/html');
  res.sendfile('./app_server/views/blog.html');
};

//post "posted" data
exports.post = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

//get all post
exports.get = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

//read single post
exports.read = async (req, res) => {
  try {
    const read = await Post.findById(req.params.postId);
    res.json(read);
  } catch (err) {
    res.json({ message: err });
  }
};

//update post
exports.patch = async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } },
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete certain post
exports.delete = async (req, res) => {
  try {
    const del = await Post.remove({ _id: req.params.postId });
    res.json(del);
  } catch (err) {
    res.json({ message: err });
  }
};
