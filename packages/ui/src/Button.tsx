import * as React from 'react';


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };
export function Button({ variant = 'primary', className = '', ...props }: Props) {
const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium';
const styles = variant === 'ghost' ? 'border border-gray-300' : 'bg-black text-white';
return <button className={`${base} ${styles} ${className}`} {...props} />;
}