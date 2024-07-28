import React from "react";
import Textarea from "../atoms/Textarea";

const FormTextareaField = ({ label, value, onChange, placeholder, error }) => (
    <div className=" pb-2">
      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{label}</label>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
      />
    </div>
  );
export default FormTextareaField;