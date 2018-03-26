import { Router } from 'express';
import * as AnswerController from '../controllers/answer.controller';
const router = new Router();

// Get all Posts
router.route('/answers').get(AnswerController.getPosts);

// Get a post

router.route('/answers').get(AnswerController.getPost);

// Add a new Post
router.route('/answers').post(AnswerController.addPost);

// Delete a post by cuid
router.route('/answers').delete(AnswerController.deletePost);

export default router;
