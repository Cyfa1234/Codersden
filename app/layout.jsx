import { Poppins } from 'next/font/google'
import Header from './components/Header';
import './globals.css'
// This page is like the root html section in react.js.

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'StudyBuddy',
  description: 'Web development tutorials & courses',
  keywords: 'web development, web design, javascript, react, node, angular, vue, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
