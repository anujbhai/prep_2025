"use client";

import ReactMarkdown from "react-markdown";
import type { Resume } from "../types/resume";

interface ResumePreviewProps {
  resume: Resume;
}

const ResumePreview = ({ resume }: ResumePreviewProps) => {
  const generateMarkdown = (): string => {
    let md = "";

    if (resume.name) {
      md += `# ${resume.name}\n\n`;
    }

    if (resume.email || resume.phone) {
      md += "## Contact Information\n\n";
      if (resume.email) {
        md += `**Email:** ${resume.email}\n`;
      }
      if (resume.phone) {
        md += `**Phone:** ${resume.phone}\n`;
      }
      md += "\n";
    }

    if (resume.summary) {
      md += "## Summary\n\n";
      md += `${resume.summary}\n\n`;
    }

    if (resume.experience && resume.experience.length > 0) {
      md += "## Experience\n\n";
      resume.experience.forEach((exp) => {
        if (exp.title || exp.company) {
          md += `### ${exp.title || "Position"}${exp.company ? ` at ${exp.company}` : ""}\n\n`;
        }
        if (exp.duration) {
          md += `*${exp.duration}*\n\n`;
        }
        if (exp.description) {
          md += `${exp.description}\n\n`;
        }
        md += "---\n\n";
      });
    }

    if (resume.skill && resume.skill.length > 0) {
      md += "## Skills\n\n";
      const validSkills = resume.skill.filter((s) => s.trim() !== "");
      if (validSkills.length > 0) {
        md += validSkills.map((skill) => `- ${skill}`).join("\n");
        md += "\n";
      }
    }

    return md;
  };

  const markdown = generateMarkdown();

  return (
    <div className="h-full max-h-screen overflow-y-auto bg-white p-8">
      <div className="mx-auto max-w-2xl">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{markdown || "# Resume Preview\n\nStart editing on the left to see your resume here."}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;

