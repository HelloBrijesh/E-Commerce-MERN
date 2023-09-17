import express from "express";

import { signup } from "../controllers/auth/signup";
import { login } from "../controllers/auth/login";
import { tokenRefresh } from "../controllers/auth/tokenRefresh";
import { changePassword } from "../controllers/auth/changePassword";
import { verifyEmail, sendEmail } from "../controllers/auth/verifyEmail";
import { auth } from "../middleware";

const router = express.Router();

router.post("/signup", signup, sendEmail);
router.get("/verify/:emailtoken", verifyEmail);
router.post("/login", login);
router.post("/forgotpassword", sendEmail);
router.post("/changepassword", auth, changePassword);
router.get("/tokenrefresh", tokenRefresh);

export default router;
