const MainContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Langara Hacks</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#schedule" className="text-gray-600 hover:text-gray-900">Schedule</a>
              <a href="#prizes" className="text-gray-600 hover:text-gray-900">Prizes</a>
              <a href="#sponsors" className="text-gray-600 hover:text-gray-900">Sponsors</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Langara Hacks 2025
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us for an amazing hackathon experience
          </p>
          <button className="bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
            Register Now
          </button>
        </section>

        {/* Content Sections */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600">
              Learn more about our hackathon and what makes it special.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Schedule</h3>
            <p className="text-gray-600">
              Check out our event timeline and key activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Prizes</h3>
            <p className="text-gray-600">
              Discover the amazing prizes waiting for winners.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainContent 