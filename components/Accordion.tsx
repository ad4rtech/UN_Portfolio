import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItemProps {
    title: string
    content: string
    isOpen: boolean
    onClick: () => void
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white"
                onClick={onClick}
            >
                <span className={`font-heading font-bold text-lg ${isOpen ? 'text-un-blue' : 'text-gray-800'}`}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="text-un-blue" size={20} />
                ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AccordionProps {
    items: {
        title: string
        content: string
    }[]
}

const Accordion = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="max-w-3xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    )
}

export default Accordion
