import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router =express.Router();


router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout) // Logout route to clear the JWT cookie. (POST method is used to ensure that the cookie is cleared securely)

router.post("/onboarding",protectRoute,onboard);


// check if user is logged in
router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({
        success: true,
        user: req.user
    });

})

export default router;

