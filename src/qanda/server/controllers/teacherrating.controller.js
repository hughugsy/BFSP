import TeacherRating from '../models/teacherrating';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

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
  if (!req.body.post.name || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new TeacherRating(req.body.post);

  // Let's sanitize inputs
  newPost.path = 'teacherratings';
  newPost.name = sanitizeHtml(newPost.name);
  newPost.grading = sanitizeHtml(newPost.grading);
  newPost.teaching = sanitizeHtml(newPost.teaching);
  newPost.workload = sanitizeHtml(newPost.workload);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.name.toLowerCase(), { lowercase: true });
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
