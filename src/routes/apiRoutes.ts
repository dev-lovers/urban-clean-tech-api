import express from "express";
import BaseController from "../controllers/baseController";
import ApiController from "../controllers/apiController";

const router = express.Router();

router.get("/", BaseController.info);

router.get("/status", ApiController.status);

export default router;
