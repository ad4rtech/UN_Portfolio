import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import { ArrowRight, Cpu, Leaf, Shield, Target, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'

// --- Types ---

type ProjectStatus = 'Active' | 'Review' | 'Planning' | 'Completed'

interface Initiative {
    title: string
    description: string
    icon: React.ReactNode
    impact: string
}

interface Project {
    title: string
    location: string
    status: ProjectStatus
    progress: number
}

interface CaseStudy {
    id: string
    title: string
    region: string
    thumbnail: string // placeholder color class
    content: {
        problem: string
        approach: string
        result: string
    }
}

// --- Data ---

const flagshipInitiatives: Initiative[] = [
    {
        title: "Digital For All",
        description: "Bridging the digital divide by building infrastructure and literacy programs in rural communities.",
        icon: <Cpu size={32} className="text-white" />,
        impact: "Connected 5M+ people"
    },
    {
        title: "Green Cities Alliance",
        description: "Supporting mayors worldwide to implement urban nature-based solutions and reduce emissions.",
        icon: <Leaf size={32} className="text-white" />,
        impact: "50 Partner Cities"
    },
    {
        title: "Peace in Practice",
        description: "Community-led conflict resolution training for youth leaders in post-conflict zones.",
        icon: <Shield size={32} className="text-white" />,
        impact: " trained 10k+ mediators"
    }
]

const ongoingProjects: Project[] = [
    {
        title: " Sahel Resilience Fund",
        location: "West Africa",
        status: "Active",
        progress: 75
    },
    {
        title: "Ocean Plastics Treaty",
        location: "Global",
        status: "Review",
        progress: 40
    },
    {
        title: "AI Ethics Framework",
        location: "Geneva HQ",
        status: "Planning",
        progress: 15
    },
    {
        title: "COVID-19 Recovery Grant",
        location: "South Asia",
        status: "Completed",
        progress: 100
    }
]

const caseStudies: CaseStudy[] = [
    {
        id: "cs1",
        title: "Water Security in Arid Zones",
        region: "East Africa",
        thumbnail: "bg-blue-200",
        content: {
            problem: "Severe drought threatening livelihoods of 2 million pastoralists, leading to resource-based conflict.",
            approach: "Deployed persistent diplomacy to secure cross-border water sharing agreements while funding deep-aquifer drilling technology.",
            result: "Stabilized water access for 500 communities and reduced local conflict incidents by 60% within 2 years."
        }
    },
    {
        id: "cs2",
        title: "Education in Emergencies",
        region: "Middle East",
        thumbnail: "bg-gold-accent/40",
        content: {
            problem: "Generation of children out of school due to prolonged conflict and displacement.",
            approach: "Launched 'Learning Without Borders', a tablet-based curriculum delivered via solar-powered community hubs.",
            result: "Reintegrated 150,000 children into a structured learning environment, accredited by regional ministries."
        }
    }
]

const futurePrograms = [
    {
        year: "2026",
        role: "Global Health Shield",
        organization: "Pandemic Preparedness",
        description: "Launching early-warning systems and rapid response logistics networks to prevent future global health crises."
    },
    {
        year: "2027",
        role: "Blue Economy Pact",
        organization: "Ocean Sustainability",
        description: "International binding agreement to protect 30% of global oceans and regulate deep-sea mining practices."
    },
    {
        year: "2028-2030",
        role: "Vision 2030 Accelerator",
        organization: "Sustainable Development",
        description: "Final push initiatives to ensure no member state is left behind on critical SDG indicators before the 2030 deadline."
    }
]

// --- Components ---

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
    const styles = {
        Active: "bg-green-100 text-green-700",
        Review: "bg-yellow-100 text-yellow-700",
        Planning: "bg-blue-100 text-blue-700",
        Completed: "bg-gray-100 text-gray-700"
    }

    const icons = {
        Active: <ActivityIcon size={14} className="mr-1" />,
        Review: <Clock size={14} className="mr-1" />,
        Planning: <Target size={14} className="mr-1" />,
        Completed: <CheckCircle size={14} className="mr-1" />
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${styles[status]}`}>
            {icons[status] || null}
            {status}
        </span>
    )
}

// Helper for status icon
const ActivityIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
)


export default function Initiatives() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Initiatives & Programs | Hon. Name Lastname</title>
                <meta name="description" content="Global initiatives, projects, and case studies led by Hon. Name Lastname." />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Initiatives & Programs"
                    subtitle="Action for Impact"
                    compact={true}
                />

                {/* Flagship Initiatives */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Flagship Initiatives</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {flagshipInitiatives.map((item, index) => (
                                <Card key={index} className="bg-un-blue text-white border-none transform transition-all hover:-translate-y-2 hover:shadow-xl">
                                    <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl mb-3">{item.title}</h3>
                                    <p className="text-blue-100 mb-6 leading-relaxed h-20">
                                        {item.description}
                                    </p>
                                    <div className="border-t border-white/20 pt-4 font-mono text-sm text-gold-accent font-bold uppercase tracking-wider">
                                        Impact: {item.impact}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ongoing Projects */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Ongoing Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ongoingProjects.map((project, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <StatusBadge status={project.status} />
                                        <span className="text-xs font-mono text-gray-400">{project.progress}%</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                        <div
                                            className="bg-un-blue h-1.5 rounded-full transition-all duration-1000"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12">Impact Case Studies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedCaseStudy(study)}
                                >
                                    <div className={`h-64 rounded-2xl mb-6 relative overflow-hidden ${study.thumbnail}`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <span className="bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                                                {study.region}
                                            </span>
                                            <h3 className="text-white font-heading font-bold text-2xl group-hover:underline decoration-gold-accent decoration-2 underline-offset-4">
                                                {study.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Future Programs */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Future Compass</h2>
                            <p className="text-gray-600">The roadmap for the next decade of action.</p>
                        </div>
                        <Timeline items={futurePrograms} />
                    </div>
                </section>

            </main>
            <Footer />

            {/* Case Study Modal */}
            <Modal
                isOpen={!!selectedCaseStudy}
                onClose={() => setSelectedCaseStudy(null)}
                title={selectedCaseStudy?.title}
            >
                {selectedCaseStudy && (
                    <div className="space-y-8">
                        <div>
                            <h4 className="flex items-center text-un-blue font-bold uppercase tracking-wider text-sm mb-3">
                                <AlertCircle size={18} className="mr-2" />
                                The Challenge
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {selectedCaseStudy.content.problem}
                            </p>
                        </div>
                        <div>
                            <h4 className="flex items-center text-un-blue font-bold uppercase tracking-wider text-sm mb-3">
                                <Target size={18} className="mr-2" />
                                Our Approach
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {selectedCaseStudy.content.approach}
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h4 className="flex items-center text-green-700 font-bold uppercase tracking-wider text-sm mb-3">
                                <CheckCircle size={18} className="mr-2" />
                                The Result
                            </h4>
                            <p className="text-gray-800 font-medium leading-relaxed text-lg">
                                {selectedCaseStudy.content.result}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    )
}
