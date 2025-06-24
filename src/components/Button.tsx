import { ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    content: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className = '', content, onClick, type = 'button' }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {content}
        </button>
    );
};
