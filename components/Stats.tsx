interface StatsProps {
    value: string | number
    label: string
    sublabel?: string
}

const Stats = ({ value, label, sublabel }: StatsProps) => {
    return (
        <div className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl">
            <div className="font-heading font-bold text-5xl md:text-6xl text-un-blue mb-3 tracking-tight">
                {value}
            </div>
            <div className="font-medium text-gray-900 text-lg md:text-xl">
                {label}
            </div>
            {sublabel && (
                <div className="text-sm text-gray-500 mt-2 font-mono">
                    {sublabel}
                </div>
            )}
        </div>
    )
}

export default Stats
