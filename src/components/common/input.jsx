import React from 'react';

const Input = ({ label, name, error, classname, inputclassname, ...rest}) => {
    return (
        <div className={`flex flex-col md:flex-row gap-3 md:gap-5 justify-between md:items-center ${classname ? classname :  'max-w-2xl'}`}>
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name} 
                className={`focus:ring-0 border-gray-300  px-3 py-2 rounded-md outline-none focus:border-gray-300 focus:shadow-md ${inputclassname ? inputclassname : 'w-[1/2]'}`}
            /> 
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;