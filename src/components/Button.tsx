//---------------------------------------------------------------------------------------------------------------------------------

import type { ReactElement, ReactNode } from 'react';

//---------------------------------------------------------------------------------------------------------------------------------

type ButtonProps = {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

const Button: ({ className, children, onClick, }: ButtonProps) => ReactElement = ({ className = '', children, onClick, }: ButtonProps): ReactElement => {
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

export { Button };