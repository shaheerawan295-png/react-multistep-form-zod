import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { skillsSchema } from "../schemas/formSchemas";

const SkillsStep = ({ data, onNext, onBack }) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(skillsSchema),
    defaultValues: data?.skills ? data : { skills: [] },
  });
  const [input, setInput] = useState("");
  const currentSkills = watch("skills") || [];
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const trimmed = input.trim().replace(/,$/, "");
      if (trimmed && !currentSkills.includes(trimmed)) {
        setValue("skills", [...currentSkills, trimmed], {
          shouldValidate: true,
        });
        setInput("");
      }
    }
  };
  const removeSkills = (indexToRemove) => {
    setValue(
      "skills",
      currentSkills.filter((_, i) => i !== indexToRemove),
      { shouldValidate: true },
    );
  };
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800">Professional Skills</h3>
        <p className="text-xs text-gray-500 mt-1">
          Press Enter or Comma (,) to add a skill tag.
        </p>
      </div>
      <hr className="border-gray-100"></hr>
      <div className="flex flex-col text-left">
        <label className="mb-1 block text-sm font-semibold text-gray-700">
          Add Core Skills
        </label>
        <div
          className={`w-full rounded-lg border p-2 flex flex-wrap gap-2 items-center min-h-11.5 bg-white transition-all focus-within:ring-2 ${errors.skills ? "border-red-500 focus-within:ring-red-200" : "border-gray-300 focus-within:border-blue-500 focus-within:ring-blue-100"}`}
        >
          {currentSkills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkills(index)}
                className="text-blue-400 hover:text-blue-600 font-bold ml-0.5"
              >
                ×
              </button>
            </span>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              currentSkills.length === 0
                ? "e.g. React, Tailwind, Zod"
                : "Add more..."
            }
            className="flex-1 outline-none text-sm p-1 min-w-30 bg-transparent"
          />
        </div>
        {errors.skills && (
          <span className="mt-1 text-xs text-red-500 font-medium">
            {errors.skills.message}
          </span>
        )}
      </div>
      <div className="flex gap-4 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 rounded-lg bg-blue-600 text-sm py-2.5 font-semibold text-white shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};
export default SkillsStep;
