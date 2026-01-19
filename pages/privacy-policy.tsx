import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Privacy Policy | Hon. Name Lastname</title>
                <meta name="description" content="Privacy Policy for the official portfolio of Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading font-bold text-4xl text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-blue max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        This Privacy Policy describes how we collect, use, and handle your personal information when you use our website.
                        As an official portfolio, we are committed to protecting your privacy and ensuring transparency in our operations.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                    <p>
                        We collect information that you strictly provide to us, such as when you use the "Get in Touch" form or sign up for newsletters.
                        This may include your name, email address, and the content of your message.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Respond to your inquiries and messages.</li>
                        <li>Provide updates on initiatives and official activities.</li>
                        <li>Improve the functionality and user experience of our website.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access,
                        alteration, disclosure, or destruction.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@un.org" className="text-un-blue hover:underline">contact@un.org</a>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    )
}
