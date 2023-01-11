import { Router } from "express";

import * as questionController from "../controllers/question";

const router = Router();

/**
 * GET /butterfly/questions
 */
router.get("/", questionController.fetchQuestions);

export default router;
