import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Base Finance",
    description: "Base is a B2B SaaS solution enabling businesses in Nigeria to seamlessly arrange housing or relocation services for employees.",
    image: "/logo1.png",
    url: "https://basefinance.netlify.app/",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"]
  },
  {
    title: "Rotenville Schools",
    description: "A website for my Mother's School",
    image: "/Rotenville.jpg",
    url: "https://rotenville.vercel.app/",
    technologies: ["Next.js", "TypeScript", "React.JS", "TailwindCSS"]
  },
  {
    title: "Mekanico ",
    description: "Mekanico is an online web platform aimed at transforming how vehicle owners find and review auto-repair professionals.",
    image: "/Mekanico.png",
    url: "https://Mekanico.ng",
    technologies: ["React", "Node.js", "MongoDB", "C#"]
  },
  {
    title: "Velcro Gaming",
    description: "Velcro Gaming is a platform for buying, selling, renting and swapping video games and in the nearest possible future, a complete social gaming community and marketplace",
    image: "/Velcro.svg",
    url: "https://www.velcrogaming.com/",
    technologies: ["React.JS", "Python", "MySQL", "jQuery"]
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Visit Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}