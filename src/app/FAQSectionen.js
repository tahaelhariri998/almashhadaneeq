import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Clock, Target, Settings } from 'lucide-react';

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "Is the tool difficult to use?",
      Icon: Settings,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      points: [
        "Simple and user-friendly interface",
        "Complete training for your team",
        "24/7 technical support"
      ]
    },
    {
      question: "How can I ensure accurate results?",
      Icon: Target,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      points: [
        "Technology developed by global experts",
        "94% accuracy in predicting results",
        "Continuous system updates"
      ]
    },
    {
      question: "What about client privacy?",
      Icon: Shield,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      points: [
        "Complete data encryption",
        "Full protection of client images",
        "Global security standards"
      ]
    },
    {
      question: "How long does it take for the team to adapt?",
      Icon: Clock,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      points: [
        "Quick one-hour training",
        "Start using effectively from day one",
        "Immediate results with the first client"
      ]
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-orange-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <HelpCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-200 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions 🤔
          </h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-md border transition-all duration-300 
                ${expandedIndex === index ? 'border-orange-300 shadow-lg' : 'border-orange-100'}`}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 focus:outline-none group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${faq.bgColor} transition-all duration-300 
                    group-hover:scale-110`}>
                    <faq.Icon className={`w-6 h-6 ${faq.color}`} />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-all duration-300 
                    ${expandedIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out bg-gradient-to-b from-orange-50/50
                  ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 pb-6">
                  <ul className="space-y-4">
                    {faq.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-orange-400 transition-all duration-300 
                          group-hover:scale-150 group-hover:bg-orange-500"></div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;