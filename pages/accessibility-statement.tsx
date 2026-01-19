import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Accessibility Statement | Hon. Name Lastname</title>
                <meta name="description" content="Accessibility Statement for the official portfolio of Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading font-bold text-4xl text-gray-900 mb-8">Accessibility Statement</h1>
                <div className="prose prose-blue max-w-none text-gray-600">
                    <p className="mb-4">
                        We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conformance Status</h2>
                    <p>
                        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities.
                        It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Feedback</h2>
                    <p>
                        We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>E-mail: <a href="mailto:contact@un.org" className="text-un-blue hover:underline">contact@un.org</a></li>
                        <li>Postal Address: UN Avenue, Gigiri, Nairobi, Kenya</li>
                    </ul>
                    <p>
                        We try to respond to feedback within 5 business days.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    )
}
