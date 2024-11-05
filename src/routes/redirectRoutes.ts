import express from "express";
import RedirectController from "../controllers/redirectController";

const router = express.Router();

router.get("/", RedirectController.redirect);

export default router;
