"use client";

import { useCallback, useMemo, useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown";
import type { Resume } from "../types/resume";

interface ResumePreviewProps {
  resume: Resume;
}

const ResumePreview = ({ resume }: ResumePreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

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

  const markdown = useMemo(
    () => generateMarkdown(),
    [resume]
  );

  const handleExport = useCallback(async () => {
    if (!previewRef.current) {
      return;
    }

    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("resume.pdf");
  }, [resume]);

  const isExportDisabled = !resume.name && !resume.summary && resume.experience.length === 0 && resume.skill.length === 0;

  return (
    <div className="flex h-full max-h-screen flex-col bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-8 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Live Preview</h2>
        <button
          type="button"
          onClick={handleExport}
          disabled={isExportDisabled}
          className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition ${
            isExportDisabled ? "cursor-not-allowed bg-gray-300" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Export PDF
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        <div ref={previewRef} className="mx-auto max-w-2xl rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{markdown || "# Resume Preview\n\nStart editing on the left to see your resume here."}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;

