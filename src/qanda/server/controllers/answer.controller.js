import Answer from '../models/answer';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
// import algoliasearch from 'algoliasearch';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Answer.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.content || !req.body.post.question) {
    res.status(403).end();
  }
  /*
  const client = algoliasearch('VJQN417WCB', 'f34396b9a1013200b2e1ea8ec39d00e8');
  const trackingsIndex = client.initIndex('posts');

  trackingsIndex.addObject(req.body.post, (error, content) => {
    if (error) {
      console.log(error);
    } else {
      console.log('successfully indexed ', content);
    }
  });*/

  const newPost = new Answer(req.body.post);

  // Let's sanitize inputs
  newPost.content = sanitizeHtml(newPost.content);
  newPost.question = sanitizeHtml(newPost.question);

  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Answer.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Answer.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
