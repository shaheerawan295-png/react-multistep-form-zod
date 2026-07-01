import React,{useState,useEffect} from "react";
import PersonalDetailsStep from "./PersonalDetailsStep";
import ExperienceStep from "./ExperienceStep";
import ReviewSubmitStep from "./ReviewSubmitStep";
import  EducationStep  from "./EducationStep";
import SkillsStep from "./SkillsStep";

const FormContainer = ()=>{
    const [step, setStep] = useState(() => {
        const savedStep = localStorage.getItem("intern_job_step");
        return savedStep ? Number(savedStep) : 1;
    });
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem("intern_job_form");
        return savedData ? JSON.parse(savedData) : {};
    });
    useEffect(()=>{
        const savedData=localStorage.getItem("intern_job_form");
        const savedStep=localStorage.getItem("intern_job_step");
        if(savedData) setFormData(JSON.parse(savedData));
        if(savedStep) setStep(Number(savedStep));
    },[]);
    const saveState=(stepData,nextStep)=>{
        const updatedData={...formData,...stepData};
        setFormData(updatedData);
        setStep(nextStep);
        localStorage.setItem("intern_job_form",JSON.stringify(updatedData));
        localStorage.setItem("intern_job_step",nextStep.toString());

    };
    const handleNext = (stepData)=>{
        saveState(stepData,step+1);
    }
    const handleBack=()=>{
        const prevStep = step-1;
        setStep(prevStep);
        localStorage.setItem("intern_job_step",prevStep.toString());
    }
    const handleFinalSubmit=()=>{
        alert("Job Application Submitted Successfuly");
        handleReset();
    };
    const handleReset = ()=>{
        localStorage.removeItem("intern_job_form");
        localStorage.removeItem("intern_job_step");
        setFormData({});
        setStep(1);
    };
    const totalStep=5;
    const progressBar=(step/totalStep)*100;
    return(
        <div className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-8">
                <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-500 ease-in-out " style={{width:`${progressBar}%`}}></div>
                </div>
                <div className="mt-2 flex justify-between text-xs font-semibold text-gray-400 ">
                    <span className="uppercase tracking-wider">Application Flow</span>
                    <span>Step {step} of {totalStep} </span>
                </div>
            </div>
            <div className="transition-all duration-300">
                {step===1 && <PersonalDetailsStep data={formData} onNext={handleNext}/>}
                {step===2 && <ExperienceStep data={formData} onNext={handleNext} onBack={handleBack}/>}
                {step===3 && <EducationStep data={formData} onNext={handleNext} onBack={handleBack}/>}
                {step===4 && <SkillsStep data={formData} onNext={handleNext} onBack={handleBack}/>}
                {step===5 && <ReviewSubmitStep data={formData} onBack={handleBack} onSubmit={handleFinalSubmit} onReset={handleReset}/>}
            </div>
        </div>
    )
}
export default FormContainer;