"use client";

import { useEffect, useState } from "react";
import type { Resume } from "../types/resume";

const STORAGE_KEY = "resume-data";

const defaultResume: Resume = {
  name: "",
  email: "",
  phone: "",
  summary: "",
  experience: [],
  skill: [],
};

export const useLocalStorage = () => {
  const [resume, setResume] = useState<Resume>(defaultResume);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setResume(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse stored resume data:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateResume = (updates: Partial<Resume>) => {
    const updated = { ...resume, ...updates };
    setResume(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { resume, updateResume, isLoaded };
};

