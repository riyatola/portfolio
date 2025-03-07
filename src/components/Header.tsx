import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-white shadow-sm"
      >
        <img
          src="/Head.png"
          alt="Rotimi Ayeni Agoro"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Rotimi Ayeni-Agoro
      </motion.h1>

      <div className="h-8 mb-4">
        <TypeAnimation
          sequence={[
            'Product Owner',
            2000,
            'Digital Transformation Expert',
            2000,
            'Product Manager',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-xl md:text-2xl text-primary-500"
          repeat={Infinity}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300"
      >
        Driving innovation through strategic product management and digital transformation
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-6"
      >
        <a href="https://github.com/riyatola" className="text-gray-600 hover:text-primary-500 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rotimi-ayeni-agoro-b76762120/" className="text-gray-600 hover:text-primary-500 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:rotimiayeniagoro@gmail.com" className="text-gray-600 hover:text-primary-500 transition-colors">
          <Mail size={24} />
        </a>
      </motion.div>
    </header>
  );
}