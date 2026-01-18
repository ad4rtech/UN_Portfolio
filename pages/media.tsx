import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import MediaGrid from '@/components/MediaGrid'
import Footer from '@/components/Footer'
import { FileText, Mic, Image as ImageIcon, Play, Download, ExternalLink, Camera } from 'lucide-react'

// Types
interface Photo {
    id: string
    src: string // In a real app, this would be a path. Using CSS colors/gradients for demo.
    caption: string
    date: string
}

interface Video {
    id: string
    title: string
    thumbnail: string
    duration: string
}

// Data
const pressReleases = [
    {
        title: "UN Announces New Funding for Climate Adaptation in Pacific Nations",
        date: "January 10, 2025",
        summary: "A landmark $500M fund aimed at building resilient infrastructure in small island developing states.",
        link: "#"
    },
    {
        title: "Official Visit to Relief Camps in Sudan",
        date: "December 05, 2024",
        summary: "High-level delegation assesses humanitarian needs and commits to increased logistical support.",
        link: "#"
    },
    {
        title: "Statement on the International Day of Peace",
        date: "September 21, 2024",
        summary: "Calling for a global ceasefire and renewed commitment to diplomacy.",
        link: "#"
    }
]

const interviews = [
    {
        outlet: "BBC World News",
        title: "Discussing the Global Food Crisis",
        date: "Nov 2024",
        link: "#"
    },
    {
        outlet: "CNN International",
        title: "The Future of Multilateralism",
        date: "Oct 2024",
        link: "#"
    },
    {
        outlet: "Le Monde",
        title: "Diplomacy in a Polarized World",
        date: "Aug 2024",
        link: "#"
    }
]

const photos: Photo[] = [
    {
        id: "p1",
        src: "bg-blue-300",
        caption: "Addressing the General Assembly during the 79th Session.",
        date: "Sept 2024"
    },
    {
        id: "p2",
        src: "bg-green-300",
        caption: "Planting trees with youth leaders in Nairobi.",
        date: "July 2024"
    },
    {
        id: "p3",
        src: "bg-yellow-300",
        caption: "Meeting with community elders in the Sahel region.",
        date: "June 2024"
    },
    {
        id: "p4",
        src: "bg-red-300",
        caption: "Inspecting humanitarian aid delivery logistics.",
        date: "May 2024"
    },
    {
        id: "p5",
        src: "bg-purple-300",
        caption: "Panel discussion on Women, Peace, and Security.",
        date: "March 2024"
    },
    {
        id: "p6",
        src: "bg-indigo-300",
        caption: "Bilateral meeting with the Secretary-General.",
        date: "Jan 2024"
    }
]

const videos: Video[] = [
    {
        id: "v1",
        title: "Year in Review: 2024 Highlights",
        thumbnail: "bg-gray-800",
        duration: "03:45"
    },
    {
        id: "v2",
        title: "Message for World Environment Day",
        thumbnail: "bg-green-900",
        duration: "01:30"
    },
    {
        id: "v3",
        title: "Press Briefing: Crisis Response",
        thumbnail: "bg-blue-900",
        duration: "15:20"
    }
]

export default function Media() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-un-blue selection:text-white">
            <Head>
                <title>Media & Press | Hon. Name Lastname</title>
                <meta name="description" content="Press releases, photo galleries, and media resources." />
            </Head>

            <Navbar />

            <main>
                <Hero
                    title="Media & Press"
                    subtitle="Resources for Journalists & Public"
                    compact={true}
                />

                {/* Press Releases */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 flex items-center">
                            <FileText className="mr-3 text-un-blue" /> Press Releases
                        </h2>
                        <div className="space-y-6">
                            {pressReleases.map((pr, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-un-blue transition-colors group">
                                    <div className="md:w-1/4 mb-4 md:mb-0">
                                        <span className="font-mono text-sm text-gray-500 font-bold uppercase tracking-wider">
                                            {pr.date}
                                        </span>
                                    </div>
                                    <div className="md:w-2/4 mb-4 md:mb-0 md:pr-8">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-un-blue transition-colors">
                                            {pr.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                            {pr.summary}
                                        </p>
                                    </div>
                                    <div className="md:w-1/4 flex md:justify-end">
                                        <button className="text-un-blue font-bold text-sm uppercase tracking-wider flex items-center hover:underline">
                                            Read Release <ArrowRightIcon className="ml-2 w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <button className="bg-white border text-gray-600 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
                                Load More Releases
                            </button>
                        </div>
                    </div>
                </section>

                {/* Interviews */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 flex items-center">
                            <Mic className="mr-3 text-un-blue" /> Selected Interviews
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {interviews.map((item, index) => (
                                <Card key={index} className="hover:-translate-y-1">
                                    <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                                        {item.date}
                                    </div>
                                    <div className="font-bold text-un-blue mb-1">
                                        {item.outlet}
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">
                                        "{item.title}"
                                    </h3>
                                    <a href={item.link} className="inline-flex items-center text-sm font-bold text-gray-600 hover:text-un-blue">
                                        Watch / Listen <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading font-bold text-3xl text-gray-900 mb-12 flex items-center">
                            <Camera className="mr-3 text-un-blue" /> Photo Gallery
                        </h2>
                        <MediaGrid>
                            {photos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="group relative cursor-pointer aspect-video rounded-xl overflow-hidden"
                                    onClick={() => setSelectedPhoto(photo)}
                                >
                                    {/* Placeholder for real image */}
                                    <div className={`w-full h-full ${photo.src} transform group-hover:scale-110 transition-transform duration-500`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                        <p className="text-white font-medium text-sm">
                                            View Caption
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </MediaGrid>
                    </div>
                </section>

                {/* Video Gallery */}
                <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="font-heading font-bold text-3xl mb-12 flex items-center">
                            <Play className="mr-3 text-gold-accent" /> Video Archive
                        </h2>
                        <MediaGrid>
                            {videos.map((video) => (
                                <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold-accent transition-colors group cursor-pointer">
                                    <div className={`aspect-video w-full ${video.thumbnail} relative flex items-center justify-center`}>
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-un-blue group-hover:scale-110 transition-all">
                                            <Play size={20} className="text-white ml-1" />
                                        </div>
                                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
                                            {video.duration}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg leading-tight group-hover:text-gold-accent transition-colors">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </MediaGrid>
                    </div>
                </section>

            </main>
            <Footer />

            {/* Photo Preview Modal */}
            <Modal
                isOpen={!!selectedPhoto}
                onClose={() => setSelectedPhoto(null)}
                title="Photo Details"
            >
                {selectedPhoto && (
                    <div className="flex flex-col">
                        <div className={`w-full aspect-video ${selectedPhoto.src} rounded-lg mb-6 shadow-sm`}></div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-900 font-medium text-lg leading-relaxed">
                                    {selectedPhoto.caption}
                                </p>
                                <button className="text-un-blue hover:bg-blue-50 p-2 rounded-full transition-colors flex-shrink-0 ml-4" title="Download High-Res">
                                    <Download size={20} />
                                </button>
                            </div>
                            <p className="text-gray-500 font-mono text-sm">
                                {selectedPhoto.date}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    )
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    )
}
