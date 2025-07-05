//---------------------------------------------------------------------------------------------------------------------------------

import { ReactNode } from 'react';

//---------------------------------------------------------------------------------------------------------------------------------

interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ className = '', children, onClick, }: ButtonProps) => {
    return (
        <button
            className={`cursor-pointer transition ease-in ${className}`}
            onClick={onClick}
            type='button'
        >
            {children}
        </button>
    );
};
