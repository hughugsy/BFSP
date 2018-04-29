import AnnouncementItem from '../models/announcementItem';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all announcementItems
 * @param req
 * @param res
 * @returns void
 */
export function getAnnouncementItems(req, res) {
  AnnouncementItem.find().sort('-dateAdded').exec((err, announcementItems) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ announcementItems });
  });
}

/**
 * Save a announcementItem
 * @param req
 * @param res
 * @returns void
 */
export function addAnnouncementItem(req, res) {
  if (!req.body.announcementItem.title || !req.body.announcementItem.content) {
    res.status(403).end();
  }

  const newAnnouncementItem = new AnnouncementItem(req.body.announcementItem);

  // Let's sanitize inputs
  newAnnouncementItem.title = sanitizeHtml(newAnnouncementItem.title);
  newAnnouncementItem.content = sanitizeHtml(newAnnouncementItem.content);

  newAnnouncementItem.cuid = cuid();
  newAnnouncementItem.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ announcementItem: saved });
  });
}

/**
 * Get a single announcementItem
 * @param req
 * @param res
 * @returns void
 */
export function getAnnouncementItem(req, res) {
  AnnouncementItem.findOne({ cuid: req.params.cuid }).exec((err, announcementItem) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ announcementItem });
  });
}

/**
 * Delete a announcementItem
 * @param req
 * @param res
 * @returns void
 */
export function deleteAnnouncementItem(req, res) {
  AnnouncementItem.findOne({ cuid: req.params.cuid }).exec((err, announcementItem) => {
    if (err) {
      res.status(500).send(err);
    }

    announcementItem.remove(() => {
      res.status(200).end();
    });
  });
}
