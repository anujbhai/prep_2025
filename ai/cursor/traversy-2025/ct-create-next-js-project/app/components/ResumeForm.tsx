"use client";

import type { Resume } from "../types/resume";

interface ResumeFormProps {
  resume: Resume;
  onUpdate: (updates: Partial<Resume>) => void;
}

const ResumeForm = ({ resume, onUpdate }: ResumeFormProps) => {
  const handleChange = (field: keyof Resume, value: string | Resume["experience"] | Resume["skill"]) => {
    onUpdate({ [field]: value });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updated = [...resume.experience];
    updated[index] = { ...updated[index], [field]: value };
    handleChange("experience", updated);
  };

  const addExperience = () => {
    const newExp = { title: "", company: "", duration: "", description: "" };
    handleChange("experience", [...resume.experience, newExp]);
  };

  const removeExperience = (index: number) => {
    const updated = resume.experience.filter((_, i) => i !== index);
    handleChange("experience", updated);
  };

  const handleSkillChange = (index: number, value: string) => {
    const updated = [...resume.skill];
    updated[index] = value;
    handleChange("skill", updated);
  };

  const addSkill = () => {
    handleChange("skill", [...resume.skill, ""]);
  };

  const removeSkill = (index: number) => {
    const updated = resume.skill.filter((_, i) => i !== index);
    handleChange("skill", updated);
  };

  return (
    <div className="h-full max-h-screen overflow-y-auto p-6">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Resume Editor</h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={resume.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={resume.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Phone (Optional)</label>
          <input
            type="tel"
            value={resume.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Summary</label>
          <textarea
            value={resume.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Brief professional summary..."
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Experience</label>
            <button
              type="button"
              onClick={addExperience}
              className="rounded-lg bg-blue-500 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              + Add
            </button>
          </div>
          <div className="space-y-4">
            {resume.experience.map((exp, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Experience #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Job Title"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Company Name"
                  />
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => handleExperienceChange(index, "duration", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Duration (e.g., Jan 2020 - Present)"
                  />
                  <textarea
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Job description and achievements..."
                  />
                </div>
              </div>
            ))}
            {resume.experience.length === 0 && (
              <p className="text-sm text-gray-500">No experience entries. Click "Add" to create one.</p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            <button
              type="button"
              onClick={addSkill}
              className="rounded-lg bg-blue-500 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              + Add
            </button>
          </div>
          <div className="space-y-2">
            {resume.skill.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Skill name"
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="rounded-lg border border-red-300 px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
            {resume.skill.length === 0 && (
              <p className="text-sm text-gray-500">No skills added. Click "Add" to create one.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;

