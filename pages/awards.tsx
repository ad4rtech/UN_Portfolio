import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Timeline from '@/components/Timeline'
import QuoteBlock from '@/components/QuoteBlock'
import Footer from '@/components/Footer'
import { Award, Star, Users, Briefcase } from 'lucide-react'

// Types
interface Honor {
    title: string
    organization: string
    year: string
    description: string
    colorClass: string
}

interface Membership {
    role: string
    organization: string
    period: string
}

// Data
const internationalHonors: Honor[] = [
    {
        title: "Grand Cross of the Order of Merit",
        organization: "Government of [Country]",
        year: "2023",
        description: "Highest national honor awarded for exceptional service to foreign affairs and international development.",
        colorClass: "bg-yellow-100 text-yellow-700"
    },
    {
        title: "Global Humanitarian Award",
        organization: "World Peace Foundation",
        year: "2021",
        description: "Recognizing outstanding leadership in coordinating relief efforts during the 2020 crisis.",
        colorClass: "bg-blue-100 text-blue-700"
    },
    {
        title: "Distinguished Diplomat Medal",
        organization: "International Diplomatic Corps",
        year: "2018",
        description: "For excellence in negotiation and conflict resolution.",
        colorClass: "bg-purple-100 text-purple-700"
    }
]

const professionalAwards = [
    {
        year: "2022",
        role: "Policy Maker of the Year",
        organization: "Global Policy Forum",
        description: "Honored for the innovative 'Digital Inclusion' framework adopted by 20 nations."
    },
    {
        year: "2019",
        role: "Excellence in Public Service",
        organization: "School of Government Alumni Association",
        description: "Recognizing a career dedicated to integrity and public welfare."
    },
    {
        year: "2015",
        role: "Chevalier de l'Ordre National",
        organization: "Republic of [Country]",
        description: "National order of merit."
    },
    {
        year: "2010",
        role: "Young Global Leader",
        organization: "World Economic Forum",
        description: "Selected for the class of 2010 for professional accomplishments and commitment to society."
    }
]

const memberships: Membership[] = [
    {
        role: "Board Member",
        organization: "Center for Strategic Studies",
        period: "2020 - Present"
    },
    {
        role: "Advisory Council",
        organization: "Women in Diplomacy Network",
        period: "2018 - Present"
    },
    {
        role: "Trustee",
        organization: "Global Education Fund",
        period: "2016 - 2022"
    },
    {
        role: "Fellow",
        organization: "Institute of International Affairs",
        period: "2012 - Present"
    }
]

export default function Awards() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Awards & Recognition | Hon. Name Lastname</title>
                <meta name="description" content="Awards, honors, and board memberships of Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Awards & Recognition"
                    subtitle="A Legacy of Excellence"
                    compact={true}
                />

                {/* International Honors */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 flex items-center justify-center md:justify-start">
                            <Award className="mr-3 text-gold-accent" size={32} /> International Honors
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {internationalHonors.map((honor, index) => (
                                <Card key={index} className="text-center md:text-left border-t-4 border-t-gold-accent">
                                    <div className={`inline-flex p-3 rounded-full mb-4 ${honor.colorClass}`}>
                                        <Star size={24} />
                                    </div>
                                    <div className="font-mono text-sm text-gray-400 mb-2">{honor.year}</div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{honor.title}</h3>
                                    <p className="text-un-blue font-medium text-sm mb-4">{honor.organization}</p>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {honor.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Awards (Timeline) */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 text-center">
                            Professional Milestones
                        </h2>
                        <Timeline items={professionalAwards} />
                    </div>
                </section>

                {/* Board Memberships */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 flex items-center justify-center">
                            <Users className="mr-3 text-un-blue" /> Board Memberships
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {memberships.map((member, index) => (
                                <div key={index} className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                                    <div className="bg-white p-3 rounded-full text-gray-400 mr-4 shadow-sm">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg text-gray-900">{member.organization}</h3>
                                        <p className="text-un-blue font-medium">{member.role}</p>
                                        <p className="text-gray-400 text-xs font-mono mt-1">{member.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-un-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">Words of Appreciation</h2>

                        <div className="space-y-12">
                            <QuoteBlock
                                quote="His ability to bring opposing sides to the table is unmatched. A true statesman who understands the delicate balance of power and principle."
                                author="Former Secretary-General"
                                title="United Nations"
                            />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
