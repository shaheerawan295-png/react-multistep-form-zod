import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationSchema } from "../schemas/formSchemas";
import InputField from "./InputField";
const EducationStep = ({ data, onNext, onBack }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: data?.education
      ? data
      : { education: [{ degree: "", institute: "", passingYear: "" }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Education Details</h3>
          <p className="text-xs text-gray-500 mt-1">
            Add your academic background.
          </p>
        </div>
        <button
          type="button"
          onClick={() => append({ degree: "", institue: "", passingYear: "" })}
          className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
        >
          + Add More
        </button>
      </div>
      <hr className="border-gray-100" />
      <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 relative space-y-1"
          >
            <InputField
              label="Degree / Qualification"
              name={`education.${index}.degree`}
              type="select"
              register={register}
              error={errors.education?.[index]?.degree}
              options={[
                { label: "Matric / O-Level", value: "Matric / O-Level" },
                {
                  label: "Intermediate / A-Level",
                  value: "Intermediate / A-Level",
                },
                { label: "Bachelor's", value: "Bachelor's" },
                { label: "Master's", value: "Master's" },
              ]}
            />
            <InputField
              label="School / College / University"
              name={`education.${index}.institute`}
              register={register}
              error={errors.education?.[index]?.institute}
              placeholder="e.g FAST, NUST, BISE Lahore"
            />

            <InputField
              label="Passing Year"
              name={`education.${index}.passingYear`}
              register={register}
              error={errors.education?.[index]?.passingYear}
              placeholder="2025"
              maxLength={4}
            />
            {fields.length > 1 && (
                <button type="button" onClick={()=>remove(index)} className="absolute top-2 right-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded hover:bg-red-100 transition-colors cursor-pointer">Remove</button>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        <button type="button" onClick={onBack} className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">Back</button>
        <button type="submit" className="flex-1 rounded-lg bg-blue-600 text-sm py-2.5 font-semibold text-white shadow-md hover:bg-blue-700 transition-colors cursor-pointer">Next Step</button>
      </div>
    </form>
  );
};
export default EducationStep;
