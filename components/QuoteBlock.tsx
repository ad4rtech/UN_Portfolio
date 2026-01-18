interface QuoteBlockProps {
    quote: string
    author: string
    title?: string
}

const QuoteBlock = ({ quote, author, title }: QuoteBlockProps) => {
    return (
        <div className="bg-white border-l-8 border-un-blue p-8 md:p-12 my-16 shadow-soft rounded-r-2xl max-w-4xl mx-auto">
            <blockquote className="font-mono text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 italic text-opacity-90">
                "{quote}"
            </blockquote>
            <div className="flex flex-col">
                <cite className="font-heading font-bold text-xl text-un-blue not-italic tracking-wide">
                    — {author}
                </cite>
                {title && (
                    <span className="text-gray-500 font-medium text-sm mt-1 uppercase tracking-wider">
                        {title}
                    </span>
                )}
            </div>
        </div>
    )
}

export default QuoteBlock
