import express from "express";

import * as bookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/", bookController.getBook);

export default router;
