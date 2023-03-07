import React from "react";

const Button = ({ size, variant, children }) => {
    const outline = 'border-2 border-primary-50 text-primary-50'
    const light = 'bg-primary-50 text-white'
    const dark = 'bg-primary-70 text-white'


  if(variant === 'light') {
    if (size === 'lg') {
        return (
            <button className={`px-24 py-2 ${light}`}>
            {children}
            </button>
        )
    }
    return (
        <button className={`px-10 py-2 ${light}`}>
                {children}
        </button>
    )

  } else if(variant === 'dark') {
        if(size === 'lg') {
            return (
                <button className={`px-24 py-2 ${dark}`}>
                    {children}
                </button>
            )
        }
        
        return (
            <button className={`px-10 py-2 ${dark}`}>
                {children}
            </button>
        )

  } else if (variant === 'outline') {
        if (size === 'lg') {
            return (
                <button className={`px-24 py-2 ${outline}`}>
                    {children}
                </button>
            )
        }

        return (
            <button className={`px-10 py-2 ${outline}`}>
            {children}
            </button>
        )
  } 

};

export default Button;
