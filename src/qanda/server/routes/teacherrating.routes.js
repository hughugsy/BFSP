import { Router } from 'express';
import * as TRController from '../controllers/teacherrating.controller';
const router = new Router();

// Get all Posts
router.route('/teacherratings').get(TRController.getTeacherRatings);

// Get one post by cuid
router.route('/teacherratings/:cuid').get(TRController.getTeacherRating);

// Add a new Post
router.route('/teacherratings').post(TRController.addTeacherRating);

// Delete a post by cuid
router.route('/teacherratings/:cuid').delete(TRController.deleteTeacherRating);

export default router;
