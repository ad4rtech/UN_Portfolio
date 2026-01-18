import { ReactNode } from 'react'

interface MediaGridProps {
    children: ReactNode
    className?: string
}

const MediaGrid = ({ children, className = '' }: MediaGridProps) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}>
            {children}
        </div>
    )
}

export default MediaGrid
