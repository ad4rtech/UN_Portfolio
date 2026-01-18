import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Accordion from '@/components/Accordion'
import QuoteBlock from '@/components/QuoteBlock'
import Footer from '@/components/Footer'
import { FileText, ExternalLink, Mic, BookOpen, Download } from 'lucide-react'

export default function Publications() {
    const reports = [
        {
            title: "Global Humanitarian Overview 2025",
            date: "December 2024",
            summary: "A comprehensive assessment of global humanitarian needs and response plans for the upcoming year.",
            link: "#"
        },
        {
            title: "The State of Food Security and Nutrition",
            date: "July 2024",
            summary: "Analysis of the drivers of hunger and malnutrition, offering recommendations for policy makers.",
            link: "#"
        },
        {
            title: "Climate Change and Security",
            date: "March 2024",
            summary: "Investigating the nexus between climate change exacerbated resource scarcity and regional conflicts.",
            link: "#"
        }
    ]

    const articles = [
        {
            title: "Why Multilateralism Matters More Than Ever",
            publisher: "Foreign Policy",
            date: "Nov 15, 2024",
            link: "#"
        },
        {
            title: "A New Social Contract for the Digital Age",
            publisher: "The Guardian",
            date: "Aug 22, 2024",
            link: "#"
        },
        {
            title: "Bridging the Gap: Finance and Development",
            publisher: "Financial Times",
            date: "May 05, 2024",
            link: "#"
        },
        {
            title: "Youth Voices in Governance",
            publisher: "Al Jazeera",
            date: "Feb 10, 2024",
            link: "#"
        }
    ]

    const speeches = [
        {
            title: "Keynote Address at the UN General Assembly (Sept 2024)",
            content: "Addressed the urgent need for reform in the Security Council, emphasizing that 21st-century challenges cannot be solved with 20th-century institutions. Called for greater representation of African and Latin American nations and proposed a timeline for intergovernmental negotiations."
        },
        {
            title: "Opening Remarks: COP29 Climate Summit (Nov 2024)",
            content: "Highlighted the disparity in climate financing between the Global North and South. Announced the launch of the 'Resilience Fund' and urged developed nations to honor their $100BN pledge immediately, warning that delay equals destruction for island nations."
        },
        {
            title: "World Economic Forum: The Future of Work (Jan 2024)",
            content: "Discussed the impact of AI on global labor markets. Stressed the importance of 'human-centric' AI regulation and the need for a global reskilling revolution to prevent widening inequality in the digital era."
        },
        {
            title: "Security Council Briefing on The Sahel (June 2024)",
            content: "Provided a detailed situation report on security dynamics in the Sahel region. Advocated for a holistic approach combining counter-terrorism operations with deep investment in local governance, education, and economic development."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Publications | Hon. Name Lastname</title>
                <meta name="description" content="Publications, reports, and speeches by Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Publications & Insights"
                    subtitle="Contributing to the Global Discourse"
                    compact={true}
                />

                {/* UN Reports */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Official UN Reports</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {reports.map((report, index) => (
                                <Card key={index} className="flex flex-col h-full hover:border-un-blue transition-colors group">
                                    <div className="mb-6 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-un-blue group-hover:bg-un-blue group-hover:text-white transition-colors">
                                        <FileText size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm font-mono text-gray-500 mb-2">{report.date}</div>
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-un-blue transition-colors">
                                            {report.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {report.summary}
                                        </p>
                                    </div>
                                    <a href={report.link} className="inline-flex items-center text-un-blue font-bold text-sm uppercase tracking-wider hover:opacity-80">
                                        <Download size={16} className="mr-2" />
                                        Download PDF
                                    </a>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Articles & Op-Eds */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Articles & Op-Eds</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article, index) => (
                                <Card key={index} className="p-0 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="p-6 md:p-8 flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center space-x-2 text-gray-400 text-sm font-mono mb-2">
                                                <BookOpen size={14} />
                                                <span>{article.publisher}</span>
                                                <span>•</span>
                                                <span>{article.date}</span>
                                            </div>
                                            <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-2">
                                                {article.title}
                                            </h3>
                                            <a href={article.link} className="inline-flex items-center text-un-blue font-bold hover:underline mt-2">
                                                Read Full Article <ExternalLink size={14} className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Speeches (Accordion) */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center space-x-3 mb-12">
                            <Mic size={32} className="text-un-blue" />
                            <h2 className="font-heading font-bold text-3xl text-gray-900">Recent Speeches</h2>
                        </div>
                        <Accordion items={speeches} />
                    </div>
                </section>

                {/* Quotes Library */}
                <section className="py-20 bg-un-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">Quotes Library</h2>

                        <div className="space-y-8">
                            <QuoteBlock
                                quote="We are not just observers of history; we are its architects. Every decision we make today lays a brick for the fortress of peace we hope to build for tomorrow."
                                author="Hon. Name Lastname"
                                title="University Commencement Speech, 2023"
                            />

                            {/* Custom styled quote for variety, or just another QuoteBlock */}
                            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 text-center">
                                <p className="font-mono text-xl md:text-2xl text-blue-50 italic leading-relaxed mb-6">
                                    "Peace is not merely the absence of conflict, but the presence of justice, opportunity, and dignity for all."
                                </p>
                                <p className="font-heading font-bold text-gold-accent text-lg">
                                    — International Peace Day Message
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
