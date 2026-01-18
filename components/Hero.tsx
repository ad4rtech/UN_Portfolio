import Link from 'next/link'

interface HeroProps {
    title?: string
    subtitle?: string
    compact?: boolean
}

const Hero = ({ title, subtitle, compact = false }: HeroProps) => {
    if (compact) {
        return (
            <section className="bg-un-blue text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">{title}</h1>
                    {subtitle && (
                        <p className="font-mono text-blue-200 text-lg md:text-xl uppercase tracking-widest">
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>
        )
    }

    return (
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-heading font-bold text-5xl md:text-7xl text-gray-900 leading-[1.1] tracking-tight">
                                Hon. <span className="text-un-blue block">Name Lastname</span>
                            </h1>
                            <p className="font-mono text-gray-500 text-lg uppercase tracking-widest border-l-4 border-gold-accent pl-4">
                                Under-Secretary-General | United Nations
                            </p>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-xl">
                            Driving global change through sustainable development, humanitarian action, and diplomatic leadership. Committed to building a fairer, safer world for all.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#initiatives" className="bg-un-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                                View Initiatives
                            </Link>
                            <Link href="#contact" className="bg-white text-un-blue border-2 border-un-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-md">
                                Contact Office
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-full h-full bg-gold-accent/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-full h-full bg-un-blue/10 rounded-full blur-3xl"></div>

                            {/* Image Placeholder */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-200 flex items-center justify-center group">
                                <span className="text-gray-400 font-medium group-hover:text-gray-500 transition-colors">
                                    High-Res Portrait
                                </span>
                                {/* 
                  <Image
                    src="/portrait.jpg"
                    alt="Hon. Name Lastname"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                 */}
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-un-blue hidden md:block animate-fade-in-up">
                                <p className="font-heading font-bold text-un-blue text-lg">30+ Years</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Diplomatic Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
