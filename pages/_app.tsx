import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { type ReactNode } from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-poppins' })

const blocks = [
  'red', 'yellow', 'green', 'indigo',
  'orange', 'red', 'yellow', 'green',
  'indigo', 'orange', 'cyan', 'pink',
  'stone', 'cyan', 'pink', 'stone'
]

export default function App ({ Component, pageProps }: AppProps): ReactNode {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-gradient-radial ${poppins.className} from-slate-200 to-slate-400` } >
      <Component {...pageProps} blocks={blocks}/>
    </main>
  )
}
