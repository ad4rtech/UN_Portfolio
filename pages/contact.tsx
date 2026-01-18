import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FormInput, FormTextArea, FormWrapper } from '@/components/FormTypes'
import { Mail, MapPin, Phone, MessageSquare, Calendar, Mic2 } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        alert('Message sent successfully (Simulation)')
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Contact | Hon. Name Lastname</title>
                <meta name="description" content="Contact the Office of the Under-Secretary-General." />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Contact"
                    subtitle="Get in Touch"
                    compact={true}
                />

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                            {/* Contact Form */}
                            <div>
                                <FormWrapper
                                    title="Send a Message"
                                    description="For general inquiries, please use the form below. We aim to respond within 3-5 business days."
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormInput
                                            label="Full Name"
                                            placeholder="Jane Doe"
                                            required
                                        />
                                        <FormInput
                                            label="Organization"
                                            placeholder="UN / NGO / Media"
                                            required
                                        />
                                    </div>

                                    <FormInput
                                        label="Subject / Purpose"
                                        placeholder="Briefly describe your inquiry"
                                        required
                                    />

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                                        <select className="shadow-sm appearance-none border border-gray-200 rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-un-blue focus:border-transparent bg-white">
                                            <option>General Inquiry</option>
                                            <option>Speaking Request</option>
                                            <option>Media / Interview</option>
                                            <option>Partnership Proposal</option>
                                        </select>
                                    </div>

                                    <FormTextArea
                                        label="Message"
                                        placeholder="How can we help you?"
                                        rows={6}
                                        required
                                    />

                                    <div className="flex justify-end mt-6">
                                        <Button type="submit" isLoading={isSubmitting}>
                                            Send Message
                                        </Button>
                                    </div>
                                </FormWrapper>
                            </div>

                            {/* Information Side */}
                            <div className="space-y-12">
                                {/* Office Info */}
                                <div>
                                    <h2 className="font-heading font-bold text-3xl text-gray-900 mb-8">Office Information</h2>
                                    <div className="space-y-6">
                                        <InfoCard
                                            icon={<MapPin className="text-un-blue" />}
                                            title="Headquarters"
                                            content={
                                                <>
                                                    United Nations Office at Nairobi<br />
                                                    United Nations Avenue, Gigiri<br />
                                                    Nairobi, Kenya
                                                </>
                                            }
                                        />
                                        <InfoCard
                                            icon={<Mail className="text-un-blue" />}
                                            title="Email"
                                            content="office.usg@un.org"
                                        />
                                        <InfoCard
                                            icon={<Phone className="text-un-blue" />}
                                            title="Phone"
                                            content="+254 20 762 1234"
                                        />
                                    </div>
                                </div>

                                {/* Specific Sections */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                                            <Mic2 size={24} />
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-gray-900">Speaking Requests</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        To invite Hon. Name Lastname to speak at your event, please submit a formal request at least 3 months in advance. Include the event theme, audience profile, and proposed dates.
                                    </p>
                                    <a href="#" className="text-un-blue font-bold text-sm uppercase tracking-wider hover:underline">Download Request Guidelines &rarr;</a>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600">
                                            <MessageSquare size={24} />
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-gray-900">Media Inquiries</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        For press accreditation, high-res assets, or interview authorizations, please contact the Communications Director directly.
                                    </p>
                                    <a href="mailto:press@un.org" className="text-un-blue font-bold text-sm uppercase tracking-wider hover:underline">Contact Press Team &rarr;</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

const InfoCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="bg-blue-50 p-4 rounded-xl mr-5">
            {icon}
        </div>
        <div>
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-1">{title}</h4>
            <div className="text-gray-600 leading-relaxed font-light">
                {content}
            </div>
        </div>
    </div>
)
