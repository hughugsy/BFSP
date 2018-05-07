import TeacherRating from '../models/teacherrating';
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
export function getTeacherRatings(req, res) {
  TeacherRating.find().sort('-dateAdded').exec((err, posts) => {
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
export function addTeacherRating(req, res) {
  if (!req.body.post.name) {
    res.status(403).end();
  }

  const client = algoliasearch('VJQN417WCB', 'f34396b9a1013200b2e1ea8ec39d00e8');
  const trackingsIndex = client.initIndex('posts');
  const id = cuid();
  const obj = {
    path: 'trcomments',
    title: req.body.post.name,
    name: req.body.post.name,
    grading: req.body.post.grading,
    teaching: req.body.post.teaching,
    workload: req.body.post.workload,
    slug: slug(req.body.post.name.toLowerCase(), { lowercase: true }),
    cuid: id,
  };
  trackingsIndex.addObject(obj, (error, content) => {
    if (error) {
      console.log(error);
    } else {
      console.log('successfully indexed ', content);
    }
  });

  const newPost = new TeacherRating(req.body.post);

  // Let's sanitize inputs
  newPost.name = sanitizeHtml(newPost.name);
  newPost.grading = sanitizeHtml(newPost.grading);
  newPost.teaching = sanitizeHtml(newPost.teaching);
  newPost.workload = sanitizeHtml(newPost.workload);

  newPost.slug = slug(newPost.name.toLowerCase(), { lowercase: true });
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
export function getTeacherRating(req, res) {
  TeacherRating.findOne({ cuid: req.params.cuid }).exec((err, post) => {
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
export function deleteTeacherRating(req, res) {
  TeacherRating.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
