import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {personalSchema} from "../schemas/formSchemas";
import InputField from "./InputField";

const PersonalDetailsStep=({data,onNext})=>{
const{register,handleSubmit,formState:{errors}}=useForm({
    resolver :zodResolver(personalSchema),
    defaultValues:data,
});
return(
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div>
            <h3 className="text-xl font-bold text-gray-800">Personal Details</h3>
            <p className="text-xs text-gray-500 mt-1">Please provide your basic contact information.</p>
        </div>
        <hr className="border-gray-100"></hr>
        <InputField label="Full Name" name="fullName" register={register} error={errors.fullName} placeholder="Shaheer Awan"/>
        <InputField label="Email Address" name="email" type="email" register={register} error={errors.email} placeholder="you@example.com"/>
        <InputField label="Phone Number" name="phone" register={register} error={errors.phone} placeholder="03141480015"/>
        <InputField label="Gender" name="gender" type="radio" register={register} error={errors.gender} options={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }]}/>
        <button type="submit" className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors cursor-pointer">Next Step</button>
    </form>
)
}
export default PersonalDetailsStep;