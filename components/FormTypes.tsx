import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: string
}

export const FormInput = ({ label, error, className = '', ...props }: InputProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                className={`shadow-sm appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-un-blue focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-200'} ${className}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
        </div>
    )
}

export const FormTextArea = ({ label, error, className = '', ...props }: TextAreaProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <textarea
                className={`shadow-sm appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-un-blue focus:border-transparent transition-all min-h-[150px] ${error ? 'border-red-500' : 'border-gray-200'} ${className}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
        </div>
    )
}

interface FormWrapperProps {
    children: React.ReactNode
    onSubmit: (e: React.FormEvent) => void
    title?: string
    description?: string
}

export const FormWrapper = ({ children, onSubmit, title, description }: FormWrapperProps) => {
    return (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-gray-100">
            {title && <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{title}</h3>}
            {description && <p className="text-gray-600 mb-8">{description}</p>}
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}
