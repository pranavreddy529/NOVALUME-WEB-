import { motion } from "framer-motion";

function FeatureButton({ feature, isExpanded, disabled, expand, collapse }) {
  const handleClick = () => {
    if (disabled) return;
    isExpanded ? collapse() : expand();
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      className={`
        flex flex-col gap-3 
        bg-[#F4F1E7] rounded-xl shadow-sm p-6 
        transform transition-all cursor-pointer
        ${disabled ? 'opacity-50' : 'opacity-100'}
        ${isExpanded ? 'w-full md:w-96' : 'w-64'}
      `}
      animate={{ 
        scale: isExpanded ? 1.05 : 1,
        height: 'auto'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <span className="text-4xl mr-4">{feature.icon}</span>
        <h3 className="text-xl font-semibold text-[#675941]">{feature.title}</h3>
      </div>
      
      {(isExpanded || !disabled) && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#675941]"
        >
          {feature.description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default FeatureButton;