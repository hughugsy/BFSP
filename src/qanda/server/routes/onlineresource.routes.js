import { Router } from 'express';
import * as ORController from '../controllers/onlineresource.controller';
const router = new Router();

// Get all Posts
router.route('/onlineresources').get(ORController.getOnlineResources);

// Get one post by cuid
router.route('/onlineresources/:cuid').get(ORController.getOnlineResource);

// Add a new Post
router.route('/onlineresources').post(ORController.addOnlineResource);

// Delete a post by cuid
router.route('/onlineresources/:cuid').delete(ORController.deleteOnlineResource);

export default router;
