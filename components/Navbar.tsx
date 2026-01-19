import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/initiatives', label: 'Initiatives' },
        { href: '/publications', label: 'Publications' },
        { href: '/media', label: 'Media' },
        { href: '/awards', label: 'Awards' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Left: Profile/Logo Area */}
                    <div className="flex-shrink-0 flex items-center space-x-3">
                        <div className="h-10 w-10 relative rounded-full overflow-hidden border border-gray-100 flex items-center justify-center">
                            <Image
                                src="/assets/pfp.jpg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center leading-none">
                            <span className="font-heading font-bold text-sm text-un-blue">Hon. Zainab</span>
                            <span className="font-heading font-bold text-sm text-black">Bangura</span>
                        </div>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-un-blue font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Get in Touch Button & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Link href="/contact" className="hidden md:inline-flex items-center px-4 py-2 border border-un-blue text-sm font-medium rounded-md shadow-sm text-white bg-un-blue hover:bg-white hover:text-un-blue transition-colors duration-200">
                            Get in Touch
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-un-blue p-2"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-un-blue hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
