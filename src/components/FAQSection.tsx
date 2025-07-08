import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/motion/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
        {/* Section Title */}
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-hero font-bold text-lh-text-light mb-6 font-helvetica leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </AnimatedSection>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Title */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.4}>
              <h3 className="text-hero font-bold text-lh-text-light mb-8 font-helvetica">
                FREQUENTLY ASKED QUESTIONS
              </h3>
            </AnimatedSection>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-1">
            <StaggeredContainer staggerDelay={0.1} className="space-y-4">
              {faqs.map((faq, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-lh-medium/10 border-lh-medium/20 backdrop-blur-sm shadow-lh-card">
                    <CardContent className="p-0">
                      <motion.button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        whileHover={{ backgroundColor: 'rgba(46, 45, 45, 0.1)' }}
                        className="w-full text-left p-6 flex items-center justify-between group"
                      >
                        <span className="text-lh-text-light font-medium pr-4">
                          {faq.question}
                        </span>
                        
                        <div className="flex-shrink-0 w-6 h-6 border border-lh-primary rounded-full flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-3 h-3 text-lh-primary" />
                          </motion.div>
                        </div>
                      </motion.button>

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
                            <div className="px-6 pb-6">
                              <div className="h-px bg-lh-text-light/20 mb-4"></div>
                              <p className="text-lh-text-light/80 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </div>
    </section>
  )
} 