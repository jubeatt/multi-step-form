import type { ReactNode } from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Layout({ children }: { children: ReactNode }) {
  return <main className={`${ubuntu.className} text-marine-blue font-normal`}>{children}</main>
}
