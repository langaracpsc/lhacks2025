import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default
  const [inputValue, setInputValue] = useState('')

  const faqs = [
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor."
    },
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu."
    },
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "Ad litora torquent per conubia nostra inceptos himenaeos. Duis vel sodales nunc, sit amet tempor ipsum. Mauris consectetur nulla vitae massa."
    },
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
    },
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    },
    {
      question: "lorem ipsum lorem ipsum lorem?",
      answer: "Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
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
              <h2 className="text-[80px] font-bold text-white mb-12 leading-tight">
                FREQUENTLY<br />
                ASKED<br />
                QUESTIONS
              </h2>

              {/* Input Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask other questions"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-white/10 border-0 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  style={{
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                  Submit
                </button>
              </div>
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
                <div key={index} className="border-b border-white/20">
                  {/* Question */}
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left py-6 flex items-center justify-between group"
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  >
                    <span className="text-white text-lg font-medium pr-4">
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
                            color: openIndex === index ? 'white' : 'rgb(111, 8, 14)'
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
                          <p className="text-white/70 leading-relaxed">
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