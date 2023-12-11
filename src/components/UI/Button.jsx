import React from 'react';

const Button = ({className, children, ...props}) => {
    return (
        <button className="border py-2 px-4 rounded-lg hover:bg-input-color" {...props}>
            {children}
        </button>
    );
};

export default Button;