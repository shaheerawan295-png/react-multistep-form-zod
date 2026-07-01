import React from "react";
const ReviewSubmitStep = ({ data, onBack, onSubmit, onReset }) => {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-green-600">Review & Submit</h3>
        <p className="text-xs text-gray-500 mt-1">
          Double check your details before final submission.
        </p>
      </div>
      <hr className="border-gray-100" />

      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 sm:p-5 text-left space-y-4">
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Personal Details
          </h4>
          {/* Fixed: grid-cols-1 for mobile, sm:grid-cols-2 for desktop */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2 text-sm">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <span className="font-medium text-gray-800">{data.fullName}</span>
            </p>
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <span className="font-medium text-gray-800">{data.email}</span>
            </p>
            <p>
              <span className="text-gray-500">Phone:</span>{" "}
              <span className="font-medium text-gray-800">{data.phone}</span>
            </p>
            <p>
              <span className="text-gray-500">Gender:</span>{" "}
              <span className="font-medium text-gray-800 capitalize">
                {data.gender}
              </span>
            </p>
          </div>
        </div>
        <hr className="border-gray-200/60"></hr>
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Experience Details
          </h4>
          {/* Fixed: grid-cols-1 for mobile, sm:grid-cols-2 for desktop */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2 text-sm">
            <p>
              <span className="text-gray-500">Company:</span>{" "}
              <span className="font-medium text-gray-800">{data.company}</span>
            </p>
            <p>
              <span className="text-gray-500">Role:</span>{" "}
              <span className="font-medium text-gray-800">{data.role}</span>
            </p>
            <p>
              <span className="text-gray-500">Experience:</span>{" "}
              <span className="font-medium text-gray-800">
                {data.yearsOfExp} Years
              </span>
            </p>
            {/* Fixed: sm:col-span-2 so it only spans full width on desktop */}
            <p className="sm:col-span-2">
              <span className="text-gray-500">Resume:</span>{" "}
              <span className="font-medium text-blue-600 truncate block max-w-full sm:max-w-xs">
                {data.resume?.[0]?.name || "Attached"}
              </span>
            </p>
          </div>
        </div>
        <hr className="border-gray-200/60"></hr>
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Education
          </h4>
          <div className="mt-2 space-y-2 text-sm max-h-37.5 overflow-y-auto">
            {data.education?.map((edu, idx) => (
              <p
                key={idx}
                className="bg-white p-2 rounded border border-gray-100"
              >
                <strong className="text-gray-800">{edu.degree}</strong> from{" "}
                <span className="text-gray-600">{edu.institute}</span> (
                {edu.passingYear})
              </p>
            ))}
          </div>
        </div>

        <hr className="border-gray-200/60"></hr>
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Skills
          </h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {data.skills?.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-200/60 text-gray-700 text-xs px-2 py-0.5 rounded font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onBack}
            className="w-full sm:flex-1 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className="w-full sm:flex-1 rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-colors cursor-pointer"
          >
            Submit Application
          </button>
        </div>
        <button
          onClick={onReset}
          className="w-full rounded-lg bg-red-50 hover:bg-red-100 py-2 text-xs font-semibold text-red-600 transition-colors cursor-pointer"
        >
          Clear & Create New Form
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;
