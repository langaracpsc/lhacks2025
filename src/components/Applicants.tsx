import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Applicants = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-lh-dark text-[#f8f0de] relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f0de]/10 hover:bg-[#f8f0de]/20 transition-colors border border-[#f8f0de]/20"
      >
        <ArrowLeft className="w-4 h-4" />
     
      </button>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-6xl font-bold mb-12 text-center">Applicants Portal</h1>
        <p className="text-xl mb-16 text-center opacity-80 max-w-2xl">
          Welcome to the LangaraHacks 2025 Applicants Portal. Choose your role below.
        </p>

        {/* Buttons Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Apply as Participant Button */}
          <button
            onClick={() => {
              // Handle participant application
              console.log('Apply as Participant clicked')
            }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8f0de]/10 to-[#f8f0de]/5 border border-[#f8f0de]/20 hover:border-[#f8f0de]/40 transition-all duration-300 hover:scale-105"
            style={{
              minHeight: '300px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f8f0de]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
              <div className="w-16 h-16 rounded-full bg-[#f8f0de]/20 flex items-center justify-center mb-6 group-hover:bg-[#f8f0de]/30 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Apply as Participant</h2>
              <p className="text-center opacity-80 leading-relaxed">
                Join us as a participant and build amazing projects with fellow hackers. 
                Showcase your skills and creativity in this exciting hackathon experience.
              </p>
            </div>
          </button>

          {/* Apply as Mentor Button */}
          <button
            onClick={() => {
              // Handle mentor application
              console.log('Apply as Mentor clicked')
            }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8f0de]/10 to-[#f8f0de]/5 border border-[#f8f0de]/20 hover:border-[#f8f0de]/40 transition-all duration-300 hover:scale-105"
            style={{
              minHeight: '300px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f8f0de]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
              <div className="w-16 h-16 rounded-full bg-[#f8f0de]/20 flex items-center justify-center mb-6 group-hover:bg-[#f8f0de]/30 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Apply as Mentor</h2>
              <p className="text-center opacity-80 leading-relaxed">
                Share your expertise and guide participants through their hackathon journey. 
                Help shape the next generation of innovators and problem solvers.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Applicants 