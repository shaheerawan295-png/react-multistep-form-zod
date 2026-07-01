import {z} from "zod";
export const personalSchema=z.object({
    fullName:z.string().min(3,"Name must rquired at least 3 characters"),
    email:z.string().email("Enter Correct Email"),
    phone:z.string().regex(/^[0-9]{10,11}$/,"Phone no must required 10 or 11 digits.."),
    gender:z.enum(["male","female"],{errorMap: ()=>({message:"SELECT GENDER "})})
});

export const experienceSchema =z.object({
    company : z.string().min(2,"Company name must"),
    role:z.string().min(2,"Job role required"),
    yearsOfExp:z.string().min(1,"Add your experience"),
    resume:z.any()
    .refine((files)=> files && files.length==1,"Add your resume")
    .refine((files)=>files?.[0]?.size <= 2000000,"File size must be less than 2MB")
    .refine(
        (files)=>{
            const fileType=files?.[0]?.type;
            const allowedTypes=[
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
                return allowedTypes.includes(fileType);
        },"Only PDF,DOC and DOCX file are allowed.!")
});
export const educationSchema=z.object({
    education:z.array(
        z.object({
            degree:z.string().min(1,"Qualification level is required.."),
            institute: z.string().min(1, "Institute name is required"),
            passingYear: z.string().min(4, "Enter a valid 4-digit year").max(4, "Enter a valid 4-digit year").refine((val) => !isNaN(Number(val)), "Year must be a number"),
        })
    ).min(1,"At least one education record is required")
});
export const skillsSchema=z.object({
    skills: z.array(z.string().min(1, "Skill cannot be empty")).min(1, "Add at least one professional skill"),
})
