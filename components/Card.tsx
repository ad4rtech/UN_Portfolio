import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
}

const Card = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`bg-white rounded-2xl shadow-soft border border-gray-100 p-8 transition-all duration-300 hover:shadow-lg ${className}`}>
            {children}
        </div>
    )
}

export default Card
