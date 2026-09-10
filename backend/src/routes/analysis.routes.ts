import { Router } from "express";
import { analysisController } from "../controllers/analysis.controller";
import { authenticate } from "../middlewares/auth";


const router = Router();


// POST /api/analysis/score
router.post("/score", authenticate,  (req, res, next) =>
  analysisController.analyzeResume(req, res, next)
);

// POST /api/analysis/job-match
router.post("/job-match", authenticate,  (req, res, next) =>
  analysisController.matchJob(req, res, next)
);



// POST /api/analysis/smart-feedback
router.post("/smart-feedback", authenticate,  (req, res, next) =>
  analysisController.generateSmartFeedback(req, res, next)
);

// POST /api/analysis/generate-content
router.post("/generate-content", authenticate,  (req, res, next) =>
  analysisController.generateContent(req, res, next)
);

// POST /api/analysis/career-growth
router.post("/career-growth", authenticate,  (req, res, next) =>
  analysisController.getCareerGrowth(req, res, next)
);

// POST /api/analysis/suggest-projects
router.post("/suggest-projects", authenticate,  (req, res, next) =>
  analysisController.suggestProjects(req, res, next)
);




// POST /api/analysis/match-url
router.post("/match-url", authenticate,  (req, res, next) =>
  analysisController.matchUrl(req, res, next)
);





// POST /api/analysis/rewrite 
router.post("/rewrite", authenticate,  (req, res, next) =>
  analysisController.rewriteBulletPoint(req, res, next)
);

// POST /api/analysis/sections
router.post("/sections", authenticate, (req, res, next) =>
  analysisController.analyzeSections(req, res, next)
);

// POST /api/analysis/resume-preview
router.post("/resume-preview", authenticate, (req, res, next) => analysisController.getResumePreview(req, res, next));

// POST /api/analysis/hiring-probability
router.post("/hiring-probability", authenticate, (req, res, next) => analysisController.getHiringProbability(req, res, next));

// POST /api/analysis/global-benchmark
router.post("/global-benchmark", authenticate, (req, res, next) => analysisController.getGlobalBenchmark(req, res, next));

// POST /api/analysis/badges
router.post("/badges", authenticate, (req, res, next) => analysisController.getBadges(req, res, next));

// POST /api/analysis/detect-industry
router.post("/detect-industry", authenticate, (req, res, next) =>
  analysisController.detectIndustry(req, res, next)
);

// POST /api/analysis/readability
router.post("/readability", authenticate, (req, res, next) =>
  analysisController.analyzeReadability(req, res, next)
);

// POST /api/analysis/compare
router.post("/compare", authenticate, (req, res, next) =>
  analysisController.compareResumes(req, res, next)
);

export default router;
