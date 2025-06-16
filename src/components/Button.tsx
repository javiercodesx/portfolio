import { ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className = '', children, onClick, type = 'button' }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
