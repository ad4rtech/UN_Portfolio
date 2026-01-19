import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import QuoteBlock from '@/components/QuoteBlock'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Globe, Users, TrendingUp, Calendar } from 'lucide-react'

// Types
interface Role {
    role: string
    years: string
    focusArea: string
}

const roles: Role[] = [
    {
        role: "Director-General, UNON",
        years: "2018 - Present",
        focusArea: "Strategic Leadership & Operations"
    },
    {
        role: "Special Representative",
        years: "2012 - 2017",
        focusArea: "Sexual Violence in Conflict"
    },
    {
        role: "Minister of Foreign Affairs",
        years: "2007 - 2010",
        focusArea: "International Cooperation"
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Hon. Zainab Hawa Bangura | United Nations Portfolio</title>
                <meta name="description" content="Official portfolio of Hon. Zainab Hawa Bangura, Director-General of the United Nations Office at Nairobi." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                <Hero />

                {/* Key Roles Snapshot */}
                <section id="roles" className="py-24 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Key Roles Snapshot</h2>
                            <div className="h-1 w-20 bg-un-blue mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {roles.map((role, index) => (
                                <Card key={index} className="hover:-translate-y-2">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="text-sm font-mono text-gray-400 mb-2">{role.years}</div>
                                            <h3 className="font-heading font-bold text-2xl text-un-blue mb-3">{role.role}</h3>
                                            <p className="text-gray-600 font-medium">{role.focusArea}</p>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-un-blue text-sm font-bold uppercase tracking-wider group cursor-pointer">
                                            View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Philosophy */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <QuoteBlock
                            quote="True leadership is not about being in charge. It is about taking care of those in your charge and fostering a world where dignity is a universal right."
                            author="Hon. Name Lastname"
                            title="Address to the General Assembly, 2023"
                        />
                    </div>
                </section>

                {/* Global Impact Metrics */}
                <section id="impact" className="py-24 bg-un-blue text-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Stats
                                value="193"
                                label="Member States Engaged"
                                sublabel="Diplomatic Missions"
                            />
                            <Stats
                                value="$4.5B"
                                label="Funds Mobilized"
                                sublabel="For Sustainable Development"
                            />
                            <Stats
                                value="15+"
                                label="Global Initiatives"
                                sublabel="Launched & Executed"
                            />
                        </div>
                    </div>
                </section>

                {/* Featured Initiatives */}
                <section id="initiatives" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-4xl text-gray-900 mb-12">Featured Initiatives</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Initiative 1 */}
                            <Card className="p-0 overflow-hidden group">
                                <div className="h-64 bg-gray-200 relative">
                                    <div className="absolute inset-0 bg-gray-800/20 group-hover:bg-gray-800/10 transition-colors"></div>
                                    {/* Placeholder for Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">Project Image 1</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 text-gold-accent font-bold text-sm mb-3">
                                        <Globe size={16} />
                                        <span>CLIMATE ACTION</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Global Resilience Framework</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Spearheading a multi-national framework to enhance climate resilience in developing nations, focusing on infrastructure and community adaptation.
                                    </p>
                                    <Link href="#" className="inline-block text-un-blue font-bold hover:underline">Read Case Study</Link>
                                </div>
                            </Card>

                            {/* Initiative 2 */}
                            <Card className="p-0 overflow-hidden group">
                                <div className="h-64 bg-gray-200 relative">
                                    <div className="absolute inset-0 bg-gray-800/20 group-hover:bg-gray-800/10 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">Project Image 2</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 text-gold-accent font-bold text-sm mb-3">
                                        <Users size={16} />
                                        <span>HUMAN RIGHTS</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Youth Empowerment Strategy</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        A comprehensive program designed to integrate youth voices into high-level policy making and provide educational grants across 5 continents.
                                    </p>
                                    <Link href="#" className="inline-block text-un-blue font-bold hover:underline">Read Case Study</Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Latest Updates */}
                <section id="latest" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="font-heading font-bold text-4xl text-gray-900">Latest Updates</h2>
                            <Link href="#" className="text-un-blue font-bold hover:text-blue-700 hidden md:block">View All News &rarr;</Link>
                        </div>

                        <div className="space-y-6">
                            {/* Update 1 */}
                            <Card className="flex flex-col md:flex-row items-start md:items-center p-6 hover:bg-white hover:border-un-blue/30 transition-colors">
                                <div className="flex-shrink-0 bg-blue-100 text-un-blue p-4 rounded-xl mb-4 md:mb-0 md:mr-6 text-center min-w-[100px]">
                                    <span className="block font-bold text-2xl">15</span>
                                    <span className="text-sm uppercase font-bold">Jan</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Keynote at the World Economic Forum</h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        delivered a keynote address emphasizing the importance of digital equity in the post-pandemic recovery era...
                                    </p>
                                </div>
                            </Card>

                            {/* Update 2 */}
                            <Card className="flex flex-col md:flex-row items-start md:items-center p-6 hover:bg-white hover:border-un-blue/30 transition-colors">
                                <div className="flex-shrink-0 bg-blue-100 text-un-blue p-4 rounded-xl mb-4 md:mb-0 md:mr-6 text-center min-w-[100px]">
                                    <span className="block font-bold text-2xl">22</span>
                                    <span className="text-sm uppercase font-bold">Dec</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">New Partnership with UNICEF</h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        Announcing a groundbreaking partnership to provide educational resources to conflict zones...
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <Link href="#" className="text-un-blue font-bold hover:text-blue-700">View All News &rarr;</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
