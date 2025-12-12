import { Poppins } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'
// This page is like the root html section in react.js.

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'CodersDen - Learn Coding & Tech Skills',
  description: 'CodersDen is your comprehensive platform for discovering world-class technology courses. Learn React, Node.js, Python, DevOps, AI/ML, and 20+ tech stacks from curated Udemy & Coursera courses. Perfect for beginners to advanced developers.',
  keywords: 'coding courses, learn programming, web development, react, node.js, python, typescript, docker, kubernetes, ai, machine learning, javascript, angular, vue, svelte, rust, golang, aws, graphql, database, full-stack development, mobile development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
