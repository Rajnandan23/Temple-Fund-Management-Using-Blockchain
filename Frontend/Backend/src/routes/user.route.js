import {Router} from "express"
import {
    registerUser, 
    loginUser, 
    logoutUser, 
    refreshAccessToken, 
    requestPasswordReset,
    resetPasswordWithOtp, 
    getCurrentUser, 
} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"


const router = Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT ,logoutUser);
router.route("/refresh-Token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT , requestPasswordReset);
router.route("/reset-password").post(verifyJWT, resetPasswordWithOtp);
router.route("/current-user").get(verifyJWT, getCurrentUser);

export default router