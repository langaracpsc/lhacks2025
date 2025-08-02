import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default
  const [inputValue, setInputValue] = useState('')

  const faqs = [
    {
      question: "What tools can I use during the hackathon?",
      answer: "You're free to use any programming languages, frameworks, or tools you like, it's completely up to you. If you're struggling with something, our mentors will be there to help you get started and answer any technical questions along the way."
    },
    {
      question: "Will food and drinks be provided?",
      answer: "Yes! We'll keep you fueled with meals, snacks, and drinks throughout the event, so you can focus on building your project."
    },
    {
      question: "How do I register for the hackathon?",
      answer: "You can register through our official event page. Spots fill up fast, so sign up early!"
    },
    {
      question: "Can students from other universities or colleges join?",
      answer: "LangaraHacks 2025 is currently open to Langara students and alumni. If you're from another school and interested in joining, feel free to reach out, we're happy to chat!"
    },
    {
      question: "Do I need a team to participate?",
      answer: "Not at all! You can register solo or sign up with a team. We'll have a team formation channel in our Discord server to help you connect with others. While we'll do our best to help, we can't guarantee that everyone will be placed in a team, so try to connect early!"
    },
    {
      question: "What kind of project should I build?",
      answer: "That's up to you! You can build anything, from apps and games to tools or websites. The official theme will be announced on the day of the hackathon to keep things exciting, but you'll have the freedom to be creative within that theme."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-lh-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Title and Input */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#f8f0de] mb-12 leading-tight" style={{ textShadow: '0 3px 5px rgba(248, 240, 222, 0.3)' }}>
                FREQUENTLY<br />
                ASKED<br />
                QUESTIONS
              </h2>
              {/* Input Field */}
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault(); // Prevent default form submission

                  if (!inputValue.trim()) {
                    alert('Please enter a question');
                    return;
                  }

                  // Manually create mailto link
                  const subject = encodeURIComponent('External Question LangaraHacks');
                  const body = encodeURIComponent(inputValue);
                  const mailtoLink = `mailto:langaracompsciclub@gmail.com?subject=${subject}&body=${body}`;

                  window.location.href = mailtoLink;
                }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Ask other questions"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-[#f8f0de]/10 border-0 rounded-full px-6 py-4 text-[#f8f0de] placeholder-[#f8f0de]/50 focus:outline-none focus:ring-2 focus:ring-[#f8f0de]/20"
                  style={{
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f8f0de] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#f8f0de]/90 transition-colors">
                  Submit
                </button>
              </form>

            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#f8f0de]/20">
                  {/* Question */}
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left py-6 flex items-center justify-between group"
                    whileHover={{ backgroundColor: 'rgba(248, 240, 222, 0.02)' }}
                  >
                    <span className="text-[#f8f0de] text-lg font-medium pr-4">
                      {faq.question}
                    </span>

                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border"
                      style={{
                        borderColor: 'rgb(111, 8, 14)',
                        backgroundColor: openIndex === index ? 'rgb(111, 8, 14)' : 'transparent'
                      }}
                    >
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown
                          className="w-3 h-3"
                          style={{
                            color: openIndex === index ? '#f8f0de' : 'rgb(111, 8, 14)'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          <p className="text-[#f8f0de]/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 