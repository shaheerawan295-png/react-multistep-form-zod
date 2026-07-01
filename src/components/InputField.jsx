import React from "react";
const InputField=({label,name,register,error,type="text",options,...rest})=>{
 return(
    <div className="mb-4 flex flex-col text-left">
        <label className="mb-1 block text-sm font-semibold text-gray-700">{label}</label>
        {type==="select"? (
            <select {...register(name)} {...rest} className={`w-full rounded-lg border p-2.5 text-sm bg-white outline-none transition-all focus:ring-2 ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"}`}>
                <option value="">Select option...</option>
                {
                    options?.map((opt)=>(
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))
                }
            </select>
        ): type ==="radio" ?(
            <div className="mt-2 flex gap-6 ">
                {options?.map((opt)=>(
                    <label key={opt.value} className="flex items-center text-sm font-medium text-gray-600 cursor-pointer">
                        <input type="radio" value={opt.value} {...register(name)} {...rest} className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"/>
                        {opt.label}
                    </label>
                ))}
            </div>
        ):type==="file"?(
            <input 
          type="file" 
          {...register(name)} 
          {...rest} 
          className={`w-full rounded-lg border p-2.5 text-sm outline-none transition-all focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          } file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
        />

        ): (
         <input type={type} 
          {...register(name)} 
          {...rest} 
          className={`w-full rounded-lg border p-2.5 text-sm outline-none transition-all focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          }`}
        />
        )}
        {error && <span className="mt-1 text-xs text-red-500 font-medium">{error.message}</span>}
    </div>
 )   
}
export default InputField;