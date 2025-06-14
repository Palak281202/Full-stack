import { motion } from 'framer-motion';

export default function SubmitButton({ isDisabled, isLoading, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`w-full mt-4 py-2 px-4 rounded-md font-semibold transition
        ${isDisabled ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'}
        text-white`}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Submitting...' : 'Submit Check-in'}
    </motion.button>
  );
}
