import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Terms of Use | Hon. Name Lastname</title>
                <meta name="description" content="Terms of Use for the official portfolio of Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading font-bold text-4xl text-gray-900 mb-8">Terms of Use</h1>
                <div className="prose prose-blue max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Welcome to the official portfolio website of Hon. Name Lastname. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
                    <p>
                        The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.
                        The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Content</h2>
                    <p>
                        The content provided on this website is for informational purposes related to the official duties and initiatives of Hon. Name Lastname.
                        It is intended for personal, non-commercial use.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
                    <p>
                        The information on this site is provided "as is" and without warranties of any kind, either express or implied.
                        Detailed official United Nations documents and statements should be verified through valid UN channels.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications</h2>
                    <p>
                        We reserve the right to change these terms at any time. Your continued use of the site following the posting of changes will mean that you accept and agree to the changes.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    )
}
