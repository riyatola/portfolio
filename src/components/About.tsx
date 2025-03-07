import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <img
            src="/WhoIAm.jpg"
            alt="Professional headshot"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500 rounded-lg -z-10" />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            As a Product Manager with extensive experience in digital transformation, 
            I specialize in bridging the gap between business objectives and technical solutions. 
            My approach combines strategic thinking with hands-on execution to deliver 
            impactful products that solve real user problems.
          </p>
          <div className="space-y-9">
            <div className="relative h-4 bg-gray-200 rounded-full pb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '95%' } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute h-full bg-primary-500"
              />
              <span className="absolute -top-6 left-0 text-primary-500">Product Strategy</span>
            </div> 
            <div className="relative h-4 bg-gray-200 rounded-full pb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '90%' } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute h-full bg-primary-500 pt-2"
              />
              <span className="absolute -top-6 left-0 text-primary-500">Digital Transformation</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full pb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '85%' } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute h-full bg-primary-500"
              />
              <span className="absolute -top-6 left-0 text-primary-500">Team Leadership</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}