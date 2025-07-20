import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { acceptFriendRequest, getFriendRequests, getMyFriends, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";
import { get } from "mongoose";


const router = express.Router();

//application of the protectRoute middleware to all user routes
router.use(protectRoute);

router.get('/',getRecommendedUsers);
router.get('/friends',getMyFriends);

router.post("/friend-request/:id",sendFriendRequest)
router.put("/friend-request/:id/accept",acceptFriendRequest)

router.get("/friend-requests",getFriendRequests);

router.get("/outgoing-friend-requests",getOutgoingFriendReqs);



export default router;
