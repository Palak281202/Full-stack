import { motion } from 'framer-motion';
// import { classicNameResolver } from 'typescript';
import classes from './EmotionCard.module.css'

export default function EmotionCard({ emotion, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classes.emotions}
    >
      <div className="text-3xl">{emotion.emoji}</div>
      <div className="mt-2 font-semibold">{emotion.label}</div>
    </motion.div>
  );
}
