import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="font-heading font-bold text-2xl text-un-blue mb-6">Contact</h3>
                        <div className="space-y-2 text-gray-600">
                            <p className="font-medium">Office of the Under-Secretary-General</p>
                            <p>United Nations Office at Nairobi</p>
                            <p className="mt-4">email@un.org</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-2xl text-un-blue mb-6">Connect</h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-gray-600 hover:text-un-blue transition-colors">LinkedIn Profile</Link>
                            <Link href="#" className="text-gray-600 hover:text-un-blue transition-colors">Twitter / X Feed</Link>
                            <Link href="#" className="text-gray-600 hover:text-un-blue transition-colors">United Nations Official Profile</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-2xl text-un-blue mb-6">Legal</h3>
                        <p className="text-gray-500 text-sm italic leading-relaxed">
                            The views expressed on this site are those of the author and do not necessarily reflect the views of the United Nations.
                        </p>
                        <p className="text-gray-400 text-xs mt-4">
                            Content verified for public release.
                        </p>
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
