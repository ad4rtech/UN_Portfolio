import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Card from '@/components/Card'
import QuoteBlock from '@/components/QuoteBlock'
import Footer from '@/components/Footer'
import { BookOpen, Globe, Award, Heart } from 'lucide-react'

export default function About() {
    const careerItems = [
        {
            year: "2018 - Present",
            role: "Under-Secretary-General",
            organization: "United Nations",
            description: "Leading strategic initiatives for sustainable development and global peace. Overseeing operations across multiple continents and coordinating with member states to achieve the 2030 Agenda."
        },
        {
            year: "2012 - 2018",
            role: "Special Envoy",
            organization: "United Nations",
            description: "Facilitated peace negotiations in conflict zones, mediating between government bodies and opposition groups. Successfully brokered ceasefires and established humanitarian corridors."
        },
        {
            year: "2005 - 2012",
            role: "Head of Mission",
            organization: "UN Humanitarian Office",
            description: "Directed large-scale relief operations during critical humanitarian crises. Managed a diverse team of 500+ staff and responsible for a budget of $200M+."
        },
        {
            year: "1998 - 2005",
            role: "Senior Diplomat",
            organization: "Ministry of Foreign Affairs",
            description: "Represented the country in various international forums. Drafted key policy papers on trade relations and regional security cooperation."
        }
    ]

    const languages = [
        { language: "English", level: "Native / Bilingual" },
        { language: "French", level: "Professional Working" },
        { language: "Spanish", level: "Professional Working" },
        { language: "Arabic", level: "Limited Working" }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>About | Hon. Name Lastname</title>
                <meta name="description" content="Biography and Career of Hon. Name Lastname" />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="About Me"
                    subtitle="A Lifetime of Service"
                    compact={true}
                />

                {/* Biography Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-8 border-b border-gray-100 pb-4">
                            Biography
                        </h2>
                        <div className="prose prose-lg prose-blue text-gray-600 leading-loose">
                            <p className="mb-6">
                                With over three decades of experience in international diplomacy and humanitarian affairs, Hon. Name Lastname has dedicated their life to bridge-building and global cooperation. Born in [City, Country], they developed an early passion for international relations, driven by a belief in the power of dialogue to resolve the world's most pressing challenges.
                            </p>
                            <p className="mb-6">
                                Throughout a distinguished career, they have held pivotal roles within the United Nations and national government, consistently advocating for the most vulnerable. Their tenure as Special Envoy was marked by breakthrough negotiations that paved the way for lasting stability in the region.
                            </p>
                            <p>
                                Today, as Under-Secretary-General, they continue to champion the values of the UN Charter, focusing on sustainable development goals, climate action, and the protection of human rights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Career Timeline */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 text-center">
                            Career Timeline
                        </h2>
                        <Timeline items={careerItems} />
                    </div>
                </section>

                {/* Education & Credentials */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 text-center">
                            Education & Credentials
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-un-blue">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">PhD in International Relations</h3>
                                    <p className="text-gray-600">University of Global Studies</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">1995</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-un-blue">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">Master of Public Administration</h3>
                                    <p className="text-gray-600">School of Government</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">1990</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-gold-accent/20 p-3 rounded-full text-gold-accent">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">Distinguished Service Medal</h3>
                                    <p className="text-gray-600">Awarded for contributions to peace.</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">2015</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-gold-accent/20 p-3 rounded-full text-gold-accent">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">Honorary Doctorate</h3>
                                    <p className="text-gray-600">Institute of Diplomacy</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">2020</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Personal Values */}
                <section className="py-20 bg-un-blue text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-12">
                            <Heart size={48} className="mx-auto mb-4 text-gold-accent" />
                            <h2 className="font-heading font-bold text-3xl">Values & Vision</h2>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                            <blockquote className="font-mono text-2xl md:text-3xl leading-relaxed italic text-center text-blue-50">
                                "Integrity is the currency of diplomacy. Without it, we cannot build trust. Without trust, we cannot build peace."
                            </blockquote>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-gold-accent">Inclusivity</h3>
                                <p className="text-blue-100">Ensuring every voice is heard, from the village council to the General Assembly.</p>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-gold-accent">Sustainability</h3>
                                <p className="text-blue-100">Meeting the needs of the present without compromising the future.</p>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-gold-accent">Accountability</h3>
                                <p className="text-blue-100">Taking responsibility for our actions and their impact on the global community.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Languages */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">
                            Languages & Cultural Engagement
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {languages.map((lang, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-un-blue transition-colors group">
                                    <div className="font-heading font-bold text-xl text-gray-900 group-hover:text-un-blue transition-colors">{lang.language}</div>
                                    <div className="text-sm font-mono text-gray-500 mt-2">{lang.level}</div>
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
