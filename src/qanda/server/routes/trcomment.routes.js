import { Router } from 'express';
import * as TRCommentController from '../controllers/trcomment.controller';
const router = new Router();

// Get all Posts
router.route('/trcomments').get(TRCommentController.getPosts);

// Get a post

router.route('/trcomments').get(TRCommentController.getPost);

// Add a new Post
router.route('/trcomments').post(TRCommentController.addPost);

// Delete a post by cuid
router.route('/trcomments').delete(TRCommentController.deletePost);

export default router;
