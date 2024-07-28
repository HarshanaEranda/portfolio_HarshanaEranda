import React from "react";
import Input from "../atoms/Input";

const FormField = ({ label, type, value, onChange, placeholder, error }) => (
    <div className="form-field">
      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{label}</label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
      />
    </div>
  );
export default FormField;