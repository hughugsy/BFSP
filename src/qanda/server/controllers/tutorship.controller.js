import Tutorship from '../models/tutorship';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import algoliasearch from 'algoliasearch';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getTutorshipItems(req, res) {
  Tutorship.find().sort('-dateAdded').exec((err, posts) => {
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
export function addTutorshipItem(req, res) {
  if (!req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const client = algoliasearch('VJQN417WCB', 'f34396b9a1013200b2e1ea8ec39d00e8');
  const trackingsIndex = client.initIndex('posts');
  const id = cuid();
  const obj = {
    path: 'tutorship',
    title: req.body.post.title,
    content: req.body.post.content,
    type: req.body.post.type,
    slug: slug(req.body.post.title.toLowerCase(), { lowercase: true }),
    cuid: id,
  };

  trackingsIndex.addObject(obj, (error, content) => {
    if (error) {
      console.log(error);
    } else {
      console.log('successfully indexed ', content);
    }
  });

  const newPost = new Tutorship(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.content = sanitizeHtml(newPost.content);
  newPost.type = sanitizeHtml(newPost.type);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = id;
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
export function getTutorshipItem(req, res) {
  Tutorship.findOne({ cuid: req.params.cuid }).exec((err, post) => {
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
export function deleteTutorshipItem(req, res) {
  Tutorship.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
