import React from "react";

const LoginButton = ({ onClick, disabled, children }) => (
    <button onClick={onClick} disabled={disabled}  className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>
      {children}
    </button>
  );
export default LoginButton;