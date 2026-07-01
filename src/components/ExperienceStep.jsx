import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { experienceSchema } from "../schemas/formSchemas";
import InputField from "./InputField";

const ExperienceStep =({data,onNext,onBack})=>{
const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(experienceSchema),
    defaultValues:data,
})  ;
return(
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Experience & Resume</h3>
        <p className="text-xs text-gray-500 mt-1">Tell us about your professional background.</p>
      </div>
      <hr className="border-gray-100" />
      <InputField label="Company name" name="company" register={register} error={errors.company} placeholder="e.g Decimal Solution" />
      <InputField label="Job Role" name="role" register={register} error={errors.role} placeholder="e.g Frontend Developer" />
      <InputField label="Years of Experience" name="yearsOfExp" type="select" register={register} error={errors.yearsOfExp} options={[
          { label: "Fresh / Less than 1 year", value: "0-1" },
          { label: "1 to 2 Years", value: "1-2" },
          { label: "3+ Years", value: "3+" }
        ]}/>
        <InputField label="Upload Resume(PDF/DOC)" name="resume" type="file" register={register} error={errors.resume} />
        <div className="flex gap-4 pt-2">
            <button type="button" onClick={onBack} className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer" >Back</button>
            <button type="submit" className="flex-1 rounded-lg bg-blue-600 text-sm py-2.5 font-semibold text-white shadow-md hover:bg-blue-700 transition-colors cursor-pointer  ">Next Step</button>
        </div>
    </form>

)
}
export default ExperienceStep;