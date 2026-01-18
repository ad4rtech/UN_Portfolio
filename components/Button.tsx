import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost'
    isLoading?: boolean
    children: ReactNode
}

const Button = ({
    variant = 'primary',
    isLoading = false,
    className = '',
    children,
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "bg-un-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-un-blue",
        outline: "bg-white text-un-blue border-2 border-un-blue hover:bg-blue-50 focus:ring-un-blue",
        ghost: "bg-transparent text-un-blue hover:bg-blue-50 focus:ring-un-blue"
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            {children}
        </button>
    )
}

export default Button
