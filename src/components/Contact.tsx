import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Download } from 'lucide-react';


export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing product development opportunities.
          </p>
          
          <div className="space-y-4 mb-8">
            <a
              href="mailto:contact@example.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Mail className="w-5 h-5 mr-3" />
              rotimiayeniagoro@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rotimi-ayeni-agoro-b76762120/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/riyatola"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub Profile
            </a>
          </div>

          <button
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors animate-pulse"
            onClick={() => window.open('/Riya Resume Plain.pdf')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </button>
        </motion.div>

      </div>
    </section>
  );
}