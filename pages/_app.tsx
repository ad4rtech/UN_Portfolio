import type { AppProps } from 'next/app'
import { Lexend, Funnel_Sans, Courier_Prime } from 'next/font/google'
import '@/styles/globals.css'

const lexend = Lexend({
    subsets: ['latin'],
    variable: '--font-lexend',
})

const funnelSans = Funnel_Sans({
    subsets: ['latin'],
    variable: '--font-funnel',
})

const courierPrime = Courier_Prime({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-courier',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${lexend.variable} ${funnelSans.variable} ${courierPrime.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    )
}
