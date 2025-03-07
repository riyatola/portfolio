import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: "Tech Workstations",
    role: "Product Manager",
    period: "2024 - Present",
    description: "Led digital transformation initiatives resulting in 40% increase in operational efficiency.",
    achievements: [
      "Acted as the primary point of contact for clients, building trust and ensuring client goals were understood and met",
      "Managed timelines, resources, and scope to ensure seamless collaboration between teams and delivery within budget and deadline constraints",
    ],
    icon: "/TW.jpeg"
  },
  {
    company: "BuyLetLive",
    role: "Product Manager",
    period: "2022 - 2024",
    description: "Drove product strategy for real estate technology platform.",
    achievements: [
      "Led agile development teams, promoting cross-functional collaboration to ensure timely product releases while maintaining high standards of quality.",
      "Achieved a 600% growth in platform users by expanding the business model to target not just realtors but also property developers, agencies, and owners, significantly enhancing market reach."
    ],
    icon: "/BLL.jpeg"
  },
  {
    company: "Fitted Fashion",
    role: "Associate Product Manager",
    period: "2023 - 2023",
    description: "Managed e-commerce platform development and optimization.",
    achievements: [
      "Delivered a tailored job posting feature, which enabled users to create and share fashion-related jobs directly with tailors, increasing new tailor sign-ups by 50% within two months.",
      "Oversaw improvements to the platform's e-commerce WordPress store based on user feedback, collaborating closely with marketing, sales, and other business units to enhance the shopping experience."
    ],
    icon: "/FITTED.jpeg"
  },
  {
    company: "Techie Planet Limited",
    role: "Project Manager",
    period: "2022 - 2023",
    description: " Translated complex project requirements into actionable visual designs, ensuring accurate development of over 50 project features per product.",
    achievements: [
      "Directed a team of developers in building and deploying the OpenLMIS open-source platform to manage COVID-19 and routine immunization vaccines across Nigeria, ensuring full system integration and operational success.",
      "Managed the delivery of the fpdashboard.ng platform, enabling government agencies to effectively monitor family planning devices through seamless integration with the DHIS-2 platform."
    ],
    icon: "/TP.jpeg"
  }
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg">
                <img 
                  src={exp.icon} 
                  alt={`${exp.company} icon`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <h4 className="text-primary-500 font-semibold">{exp.role}</h4>
              </div>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">
                  • {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}