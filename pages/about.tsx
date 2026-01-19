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
                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Early Life & Education</h3>
                            <p className="mb-4">
                                Zainab Hawa Bangura was born in the small rural town of Yonibana, Tonkolili District, Sierra Leone. The daughter of an imam, she overcame humble beginnings to attend Mathora Girls Secondary School on a scholarship, later graduating from the Annie Walsh Girls Secondary School in Freetown. She holds a bachelor’s degree from Fourah Bay College and advanced diplomas in insurance management from the City University of London and Nottingham University.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Activism & Civil Society</h3>
                            <p className="mb-4">
                                A relentless advocate for conflict resolution and human rights, Ms. Bangura began her activism during Sierra Leone's difficult military junta period. She founded "Women Organized for a Morally Enlightened Nation" (W.O.M.E.N.) and co-founded the "Campaign for Good Governance" (CGG), playing a pivotal role in restoring democratic government to the nation in 1996.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Public Service</h3>
                            <p className="mb-4">
                                Ms. Bangura has served her country with distinction, holding the positions of Minister of Foreign Affairs and International Cooperation (2007-2010)—the second woman to do so—and Minister of Health and Sanitation (2010-2012). Her tenure was marked by a commitment to institutional reform and transparency.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">United Nations Career</h3>
                            <p className="mb-4">
                                Her international career began with the United Nations Mission in Liberia (UNMIL) as Chief of Civil Affairs, managing the mission's largest civilian component. From 2012 to 2017, she served as the Special Representative of the Secretary-General on Sexual Violence in Conflict, spearheading global protocols to combat sexual violence in war zones. In 2018, she was appointed Director-General of the United Nations Office at Nairobi (UNON).
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
                        <Timeline items={[
                            {
                                year: "2018 - Present",
                                role: "Director-General",
                                organization: "UNON (Nairobi)",
                                description: "Leading the United Nations Office at Nairobi, providing executive direction and serving as the Secretary-General's representative in Kenya."
                            },
                            {
                                year: "2012 - 2017",
                                role: "Special Representative",
                                organization: "UN (Sexual Violence in Conflict)",
                                description: "Served as Under-Secretary-General, launching international protocols and negotiating with military leaders to prosecute crimes of sexual violence."
                            },
                            {
                                year: "2010 - 2012",
                                role: "Minister of Health",
                                organization: "Government of Sierra Leone",
                                description: "Oversaw national health strategies and sanitation reforms."
                            },
                            {
                                year: "2007 - 2010",
                                role: "Minister of Foreign Affairs",
                                organization: "Government of Sierra Leone",
                                description: "Managed international relations and cooperation."
                            },
                            {
                                year: "1996 - 2002",
                                role: "Executive Director / Coordinator",
                                organization: "Campaign for Good Governance",
                                description: "Documented human rights violations and promoted peace-building."
                            }
                        ]} />
                    </div>
                </section>

                {/* Recognition */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 text-center">
                            Recognition & Awards
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-un-blue">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">Democracy Award</h3>
                                    <p className="text-gray-600">National Endowment for Democracy (Washington, DC)</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">2006</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-un-blue">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">Human Rights Award</h3>
                                    <p className="text-gray-600">Lawyers Committee for Human Rights (New York)</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">2000</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-gold-accent/20 p-3 rounded-full text-gold-accent">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">BBC 100 Women</h3>
                                    <p className="text-gray-600">Recognized as one of the most influential women globally.</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">2013</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-4">
                                <div className="bg-gold-accent/20 p-3 rounded-full text-gold-accent">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900">International Award of Merit</h3>
                                    <p className="text-gray-600">African International Award for Leadership (Nigeria)</p>
                                    <p className="text-sm text-gray-400 font-mono mt-1">1999</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
