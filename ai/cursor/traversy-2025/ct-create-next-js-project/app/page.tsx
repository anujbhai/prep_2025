"use client";

import { useLocalStorage } from "./hooks/useLocalStorage";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

const Home = () => {
  const { resume, updateResume, isLoaded } = useLocalStorage();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50 md:flex-row">
      <div className="w-full border-b border-gray-200 bg-white md:w-1/2 md:border-b-0 md:border-r">
        <ResumeForm resume={resume} onUpdate={updateResume} />
      </div>
      <div className="w-full md:w-1/2">
        <ResumePreview resume={resume} />
      </div>
    </div>
  );
};

export default Home;
