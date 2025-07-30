





import { motion } from "framer-motion";

const Header = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-8 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-sky-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Header;

