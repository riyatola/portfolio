import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Users2, LineChart, Lightbulb, Workflow } from 'lucide-react';

const skills = [
  {
    category: "Product Management",
    items: ["Product Strategy", "Roadmap Planning", "User Research", "Data Analysis"],
    icon: Target
  },
  {
    category: "Technical Skills",
    items: ["Agile Methodologies", "JIRA", "SQL", "TypeScript"],
    icon: Workflow
  },
  {
    category: "Leadership",
    items: ["Team Management", "Stakeholder Communication", "Project Leadership", "Mentoring"],
    icon: Users2
  },
  {
    category: "Business",
    items: ["Market Analysis", "Revenue Modeling", "Growth Strategy", "KPI Definition"],
    icon: LineChart
  },
  {
    category: "Innovation",
    items: ["Design Thinking", "Problem Solving", "Digital Transformation", "Process Optimization"],
    icon: Lightbulb
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Negotiation", "Presentation", "Collaboration"],
    icon: Brain
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              {<skill.icon className="w-6 h-6 text-primary-500 mr-3" />}
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}