import { motion } from 'framer-motion';
import classes from './SubmitButton.module.css'
// import { Link, useNavigate } from "react-router-dom";


export default function SubmitButton({ isDisabled, isLoading, onClick }) {
  // const navigate = useNavigate();
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${classes.button}
        ${isDisabled ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'}
        text-white`}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Submitting...' : 'Submit Check-in'}
    </motion.button>
  );
}
