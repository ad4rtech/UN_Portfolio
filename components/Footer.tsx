import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Profile & Socials */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="h-12 w-12 relative flex items-center justify-center">
                                <Image
                                    src="/assets/pfp.jpg"
                                    alt="Profile"
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center leading-none">
                                <span className="font-heading font-bold text-lg text-un-blue">Hon. Zainab</span>
                                <span className="font-heading font-bold text-lg text-black">Bangura</span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Advocating for global peace, sustainable development, and human rights through international cooperation and leadership.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <Link href="#" className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-un-blue hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </Link>
                            <Link href="#" className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                            </Link>
                            <Link href="#" className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <h3 className="font-heading font-bold text-lg text-un-blue mb-6">Explore</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link href="/" className="hover:text-un-blue transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-un-blue transition-colors">About</Link></li>
                                <li><Link href="/leadership" className="hover:text-un-blue transition-colors">Leadership</Link></li>
                                <li><Link href="/initiatives" className="hover:text-un-blue transition-colors">Initiatives</Link></li>
                            </ul>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link href="/publications" className="hover:text-un-blue transition-colors">Publications</Link></li>
                                <li><Link href="/media" className="hover:text-un-blue transition-colors">Media</Link></li>
                                <li><Link href="/awards" className="hover:text-un-blue transition-colors">Awards</Link></li>
                                <li><Link href="/contact" className="hover:text-un-blue transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h3 className="font-heading font-bold text-lg text-un-blue mb-6">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/privacy-policy" className="hover:text-un-blue transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/accessibility-statement" className="hover:text-un-blue transition-colors">Accessibility Statement</Link></li>
                            <li><Link href="/terms-of-use" className="hover:text-un-blue transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="font-heading font-bold text-lg text-un-blue mb-6">Contact</h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-un-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div>
                                    <p className="font-bold text-gray-900">United Nations Office at Nairobi</p>
                                    <p>UN Avenue, Gigiri</p>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-un-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <a href="mailto:contact@un.org" className="hover:text-un-blue transition-colors">contact@un.org</a>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-un-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                <a href="https://www.unon.org" target="_blank" rel="noopener noreferrer" className="hover:text-un-blue transition-colors">www.unon.org</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-mono">
                    <p>© {year} Name Lastname. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Design inspired by modern diplomatic standards.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
