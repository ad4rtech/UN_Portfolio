import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Accordion from '@/components/Accordion'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { Briefcase, Gavel, Scale, Globe, Users, Handshake } from 'lucide-react'

export default function Leadership() {
    const priorities = [
        {
            title: "Sustainable Development Goals (SDGs)",
            content: "Accelerating the implementation of the 2030 Agenda by localizing goals and mobilizing private sector finance to close the funding gap in developing nations."
        },
        {
            title: "Climate Action",
            content: "Championing carbon neutrality within UN operations and advocating for stricter global emission targets. Leading task forces on climate adaptation for small island developing states."
        },
        {
            title: "Peace & Security",
            content: "Promoting preventive diplomacy and mediation as primary tools for conflict resolution. Strengthening peacekeeping mandates to protect civilians in volatile regions."
        },
        {
            title: "Gender Equality",
            content: "Implementing the 'Women, Peace and Security' agenda to ensure women's full participation in peace processes and governance at all levels."
        },
        {
            title: "Youth Empowerment",
            content: "Establishing permanent youth consultative bodies within the UN framework to ensure intergenerational equity in policy-making."
        }
    ]

    const policies = [
        {
            title: "Digital Cooperation Roadmap",
            description: "A framework ensuring digital technologies serve human rights and inclusive growth.",
            icon: <Globe size={24} className="text-un-blue" />
        },
        {
            title: "Global Migration Compact",
            description: "Enhancing international cooperation on safe, orderly, and regular migration.",
            icon: <Users size={24} className="text-un-blue" />
        },
        {
            title: "Anti-Corruption Reforms",
            description: "Strengthening institutional transparency and accountability mechanisms worldwide.",
            icon: <Gavel size={24} className="text-un-blue" />
        },
        {
            title: "Humanitarian Access Protocols",
            description: "New standards for ensuring aid delivery in conflict zones while protecting aid workers.",
            icon: <Briefcase size={24} className="text-un-blue" />
        }
    ]

    const partners = [
        "World Bank Group",
        "African Union",
        "European Union",
        "World Health Organization",
        "Global Tech Alliance",
        "Red Cross / Red Crescent"
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Leadership & Work | Hon. Name Lastname</title>
                <meta name="description" content="Leadership priorities and UN work of Hon. Name Lastname" />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Leadership & UN Work"
                    subtitle="Strategic Vision & Execution"
                    compact={true}
                />

                {/* Current Role Responsibilities */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3">
                                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">Current Mandate</h2>
                                <div className="h-1 w-20 bg-un-blue rounded-full mb-6"></div>
                                <p className="text-gray-600 leading-relaxed">
                                    As Under-Secretary-General, the primary mandate involves overseeing the strategic direction of the Office, coordinating with 193 member states, and ensuring the effective delivery of the UN's core pillars: Peace, Development, and Human Rights.
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Scale size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Strategic Oversight</h3>
                                    <p className="text-sm text-gray-600">Directing policy formulation and operational planning for global missions.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Handshake size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Diplomatic Liaison</h3>
                                    <p className="text-sm text-gray-600">Managing high-level relations with Heads of State and Government.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Users size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Resource Mobilization</h3>
                                    <p className="text-sm text-gray-600">Securing funding and political support for critical initiatives.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Globe size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Crisis Response</h3>
                                    <p className="text-sm text-gray-600">Leading rapid response coordination for emerging global emergencies.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Priorities */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Strategic Priorities</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Focusing on high-impact areas to drive systemic change and achieve the Sustainable Development Goals.</p>
                        </div>

                        <Accordion items={priorities} />
                    </div>
                </section>

                {/* Governance & Policy Influence */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Governance & Policy Influence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {policies.map((policy, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow">
                                    <div className="mb-4">{policy.icon}</div>
                                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-3 min-h-[56px] flex items-center">
                                        {policy.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {policy.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnerships & Collaboration */}
                <section className="py-24 bg-un-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="font-heading font-bold text-3xl text-white mb-4">Partnerships & Collabortion</h2>
                            <div className="h-1 w-20 bg-gold-accent mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {partners.map((partner, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex items-center justify-center text-center hover:bg-white/20 transition-colors group cursor-pointer">
                                    <span className="font-medium text-blue-100 group-hover:text-white text-sm">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
