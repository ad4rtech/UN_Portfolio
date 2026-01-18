
interface TimelineItem {
    year: string
    role: string
    organization: string
    description: string
}

interface TimelineProps {
    items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
            {items.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                    {/* Dot */}
                    <div className="absolute top-0 left-[-9px] bg-white border-4 border-un-blue w-5 h-5 rounded-full shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h3 className="font-heading font-bold text-xl text-gray-900">{item.role}</h3>
                        <span className="font-mono text-sm font-bold text-un-blue bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                            {item.year}
                        </span>
                    </div>

                    <div className="text-lg font-medium text-gray-700 mb-3">{item.organization}</div>
                    <p className="text-gray-600 leading-relaxed font-light">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Timeline
