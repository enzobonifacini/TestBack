import { Router } from "express";
import { register, login, logout, verifyToken, profile } from '../controllers/auth.controller.js'
import { tokenRequired } from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validateFields.js";
import { registerUserSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router();

router.post("/register", validateSchema(registerUserSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.post("/auth/verify", verifyToken);
router.get("/profile", tokenRequired, profile);

export default router;
