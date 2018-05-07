import BuyAndSell from '../models/buyandsell';
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
export function getBuyAndSellItems(req, res) {
  BuyAndSell.find().sort('-dateAdded').exec((err, posts) => {
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
export function addBuyAndSellItem(req, res) {
  if (!req.body.post.title) {
    res.status(403).end();
  }

  const client = algoliasearch('VJQN417WCB', 'f34396b9a1013200b2e1ea8ec39d00e8');
  const trackingsIndex = client.initIndex('posts');
  const id = cuid();
  const obj = {
    path: 'buyandsell',
    title: req.body.post.title,
    content: req.body.post.content,
    price: req.body.post.price,
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
  const newPost = new BuyAndSell(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.content = sanitizeHtml(newPost.content);
  newPost.price = sanitizeHtml(newPost.price);
  newPost.contact = sanitizeHtml(newPost.contact);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = id;
  // console.log(newPost);
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
export function getBuyAndSellItem(req, res) {
  BuyAndSell.findOne({ cuid: req.params.cuid }).exec((err, post) => {
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
export function deleteBuyAndSellItem(req, res) {
  BuyAndSell.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
