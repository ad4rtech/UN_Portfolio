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

                {/* Current Mandate */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3">
                                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">UNON Mandate</h2>
                                <div className="h-1 w-20 bg-un-blue rounded-full mb-6"></div>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The Director-General is responsible for all activities of the United Nations Office at Nairobi. As the representative of the Secretary-General, she provides advice on political, diplomatic, and cross-cutting issues in the region.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    She serves as the main interlocutor with Kenyan authorities and provides executive direction to administration, conference services, and security programmes.
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Scale size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Representation</h3>
                                    <p className="text-sm text-gray-600">Representing the Secretary-General in relations with permanent missions and regional organizations.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Handshake size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Diplomatic Advice</h3>
                                    <p className="text-sm text-gray-600">Providing support on a broad range of political and diplomatic issues in the region.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Users size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Executive Direction</h3>
                                    <p className="text-sm text-gray-600">Managing administration, conference services, security, and public information activities.</p>
                                </Card>
                                <Card className="bg-blue-50 border-none shadow-none">
                                    <Gavel size={32} className="text-un-blue mb-4" />
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Security Designated Official</h3>
                                    <p className="text-sm text-gray-600">Serving as the Designated Official for the security and safety of the UN system in Kenya.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gender Parity Strategy */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Gender Parity Strategy</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The UN-wide Strategy on Gender Parity seeks a fair balance between individual accountability and incentives, fostering a gender-neutral and inclusive workplace.
                            </p>
                        </div>

                        <Accordion items={[
                            {
                                title: "Leadership & Accountability",
                                content: "Setting targets and monitoring progress at the highest levels of senior management to ensure commitment to gender parity goals."
                            },
                            {
                                title: "Recruitment & Retention",
                                content: "Implementing unbiased recruitment processes and creating retention strategies that support long-term career growth for women."
                            },
                            {
                                title: "Enabling Environment",
                                content: "Creating an inclusive culture that empowers staff and managers, recognizing different starting points and challenges."
                            },
                            {
                                title: "Mission Settings",
                                content: "Addressing the unique challenges of gender parity in field missions and volatile environments."
                            },
                            {
                                title: "Cultural Change",
                                content: "Moving beyond quantitative goals to change the institutional culture, ensuring the Organization can fully deliver on its promises."
                            }
                        ]} />
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
