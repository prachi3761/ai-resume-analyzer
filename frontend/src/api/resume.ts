import apiClient from "./client";
import type { Resume, Analysis, JobMatch, SmartFeedbackResponse, SectionAnalysisResponse, RewriteResponse, GeneratedContent, ResumeComparison, IndustryDetection, ReadabilityResult, CareerGrowth, ProjectSuggestion, HiringProbability, GlobalBenchmark, BadgesResponse, ResumePreview, } from "@/types";

export const resumeApi = {
  upload: async (file: File): Promise<Resume> => {
    const formData = new FormData();
    formData.append("resume", file);
    const response = await apiClient.post<Resume>("/resume/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  getHistory: async (): Promise<Resume[]> => {
    const response = await apiClient.get<Resume[]>("/resume/history");
    return response.data;
  },

  getById: async (id: string): Promise<Resume> => {
    const response = await apiClient.get<Resume>(`/resume/${id}`);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/resume/${id}`);
  },

  analyze: async (resumeId: string): Promise<Analysis> => {
    const response = await apiClient.post<Analysis>("/analysis/score", {
      resumeId,
    });
    return response.data;
  },

  matchJob: async (
    resumeId: string,
    jobDescription: string
  ): Promise<JobMatch> => {
    const response = await apiClient.post<JobMatch>("/analysis/job-match", {
      resumeId,
      jobDescription,
    });
    return response.data;
  },

  matchUrl: async (resumeId: string, jobUrl: string): Promise<{ matchPercentage: number; missingKeywords: string[]; recommendation: string }> => {
    const response = await apiClient.post<{ matchPercentage: number; missingKeywords: string[]; recommendation: string }>("/analysis/match-url", { resumeId, jobUrl });
    return response.data;
  },

 


  getSmartFeedback: async (
    resumeId: string
  ): Promise<SmartFeedbackResponse> => {
    const response = await apiClient.post<SmartFeedbackResponse>(
      "/analysis/smart-feedback",
      { resumeId }
    );
    return response.data;
  },

  rewriteBulletPoint: async (text: string): Promise<RewriteResponse> => {
    const response = await apiClient.post<RewriteResponse>(
      "/analysis/rewrite",
      { text }
    );
    return response.data;
  },

  analyzeSections: async (
    resumeId: string
  ): Promise<SectionAnalysisResponse> => {
    const response = await apiClient.post<SectionAnalysisResponse>(
      "/analysis/sections",
      { resumeId }
    );
    return response.data;
  },

  generateContent: async (
    resumeId: string,
    jobDescription: string,
    type: "cover_letter" | "linkedin_summary" | "professional_bio"
  ): Promise<GeneratedContent> => {
    const response = await apiClient.post<GeneratedContent>(
      "/analysis/generate-content",
      { resumeId, jobDescription, type }
    );
    return response.data;
  },

  detectIndustry: async (resumeId: string): Promise<IndustryDetection> => {
    const response = await apiClient.post<IndustryDetection>("/analysis/detect-industry", { resumeId });
    return response.data;
  },

  analyzeReadability: async (resumeId: string): Promise<ReadabilityResult> => {
    const response = await apiClient.post<ReadabilityResult>("/analysis/readability", { resumeId });
    return response.data;
  },

  compareResumes: async (
    oldResumeId: string,
    newResumeId: string
  ): Promise<ResumeComparison> => {
    const response = await apiClient.post<ResumeComparison>(
      "/analysis/compare",
      { oldResumeId, newResumeId }
    );
    return response.data;
  },

  getCareerGrowth: async (resumeId: string): Promise<CareerGrowth> => {
    const response = await apiClient.post<CareerGrowth>("/analysis/career-growth", { resumeId });
    return response.data;
  },

  suggestProjects: async (resumeId: string): Promise<{ projects: ProjectSuggestion[] }> => {
    const response = await apiClient.post<{ projects: ProjectSuggestion[] }>("/analysis/suggest-projects", { resumeId });
    return response.data;
  },



  getResumePreview: async (resumeId: string): Promise<ResumePreview> => {
    const response = await apiClient.post<ResumePreview>("/analysis/resume-preview", { resumeId });
    return response.data;
  },

  getHiringProbability: async (resumeId: string): Promise<HiringProbability> => {
    const response = await apiClient.post<HiringProbability>("/analysis/hiring-probability", { resumeId });
    return response.data;
  },

  getGlobalBenchmark: async (resumeId: string): Promise<GlobalBenchmark> => {
    const response = await apiClient.post<GlobalBenchmark>("/analysis/global-benchmark", { resumeId });
    return response.data;
  },

  getBadges: async (resumeId: string): Promise<BadgesResponse> => {
    const response = await apiClient.post<BadgesResponse>("/analysis/badges", { resumeId });
    return response.data;
  },
};
