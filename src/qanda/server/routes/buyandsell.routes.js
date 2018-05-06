import { Router } from 'express';
import * as BSController from '../controllers/buyandsell.controller';
const router = new Router();

// Get all Posts
router.route('/buyandsells').get(BSController.getBuyAndSellItems);

// Get one post by cuid
router.route('/buyandsells/:cuid').get(BSController.getBuyAndSellItem);

// Add a new Post
router.route('/buyandsells').post(BSController.addBuyAndSellItem);

// Delete a post by cuid
router.route('/buyandsells/:cuid').delete(BSController.deleteBuyAndSellItem);

export default router;
