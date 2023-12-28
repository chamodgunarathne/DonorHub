import React from "react";

const TextField = ({ label, placeholder ,type, name , value , onChange}) => {
  return (
    <div className="m-1">
      <label className="block text-gray-700 text-xl font-semibold mb-4">{label}</label>
      <input
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
      />
      <br/>
    </div>
  );
};

export default TextField;
