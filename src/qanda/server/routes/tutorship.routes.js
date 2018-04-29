import { Router } from 'express';
import * as ORController from '../controllers/tutorship.controller';
const router = new Router();

// Get all Posts
router.route('/tutorship').get(ORController.getTutorshipItems);

// Get one post by cuid
router.route('/tutorship/:cuid').get(ORController.getTutorshipItem);

// Add a new Post
router.route('/tutorship').post(ORController.addTutorshipItem);

// Delete a post by cuid
router.route('/tutorship/:cuid').delete(ORController.deleteTutorshipItem);

export default router;