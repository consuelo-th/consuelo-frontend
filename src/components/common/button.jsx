import React from "react";

const Button = ({ size, variant, handleClick, children}) => {
    const outline = 'border-2 border-primary-50 text-primary-50'
    const light = 'bg-primary-50 text-white'
    const dark = 'bg-primary-70 text-white'


  if(variant === 'light') {
    if (size === 'lg') {
        return (
            <button className={`px-24 py-2 ${light}`} onClick={handleClick}>
                {children}
            </button>
        )
    }
    return (
        <button className={`px-10 py-2 ${light}`} onClick={handleClick}>
                {children}
        </button>
    )

  } else if(variant === 'dark') {
        if(size === 'lg') {
            return (
                <button className={`px-24 py-2 ${dark}`} onClick={handleClick}>
                    {children}
                </button>
            )
        }
        
        return (
            <button className={`px-10 py-2 ${dark}`} onClick={handleClick}>
                {children}
            </button>
        )

  } else if (variant === 'outline') {
        if (size === 'lg') {
            return (
                <button className={`px-24 py-2 ${outline}`} onClick={handleClick}>
                    {children}
                </button>
            )
        }

        return (
            <button className={`px-10 py-2 ${outline}`} onClick={handleClick}>
            {children}
            </button>
        )
  } 

};

export default Button;
