import { motion } from "framer-motion";

const HeadingWithLine = ({ children }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "50px" }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-yellow-400 mr-4"
      />
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">{children}</h3>
    </div>
  );
};

export default HeadingWithLine;
