import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackModal({ isOpen, message, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicking inside
          >
            <div className="text-2xl font-semibold text-pink-600 mb-4">Mood Check-in</div>
            <div className="text-gray-700">{message}</div>
            <button
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
