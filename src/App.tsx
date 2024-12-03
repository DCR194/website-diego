import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ChevronDownIcon, BugzillaIcon } from './components/icons';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-24">
        <section id="about" className="pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Diego Escalante
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              Computer Engineering Student at University of Toronto
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Third-year Computer Engineering student at the University of Toronto with a strong interest in
              low-level programming, C/C++, operating systems, compilers, and algorithms.
              I'm passionate about solving complex problems through efficient code and system design,
              and continuously expanding my skills through academic projects and hands-on experience.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <MailIcon />
                Contact Me
              </a>
              <a href="/assets/DiegoEscalanteResume.pdf" className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex gap-6 mt-12">
            <a href="https://linkedin.com/in/diego-ciudad" className="text-gray-600 hover:text-gray-900 transition-colors" target='_blank'>
              <LinkedinIcon />
            </a>
            <a href="https://github.com/DCR194" className="text-gray-600 hover:text-gray-900 transition-colors" target='_blank'>
              <GithubIcon />
            </a>
            <a href="https://bugzilla.mozilla.org/user_profile?user_id=761038" className="text-gray-600 hover:text-gray-900 transition-colors" target='_blank'>
              <BugzillaIcon />
            </a>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
        {/* TODO: add the lines below to their own component, just for fun
        <div className="flex gap-6 mt-12">
          <iframe src="https://open.spotify.com/embed/playlist/04k96RugjKQSYKx7VmgaPt?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/7mTYpASICbtShhmoSN3AI7?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        */}
      </main>


      <a href="#about" className="fixed bottom-8 right-8 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
        <ChevronDownIcon />
      </a>
    </div>
  );
}

export default App;