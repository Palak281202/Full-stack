import classes from './NotesInput.module.css'

export default function NotesInput({ notes, setNotes, emotion, emoji }) {
  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>❁ What is making you feel this way? ❁</h1>
      <textarea className={classes.textarea}
        rows="4"
        placeholder="I feel this way because⭒⭒⭒⭒"
        maxLength={500}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className={classes.length}>
        {notes.length}/500
      </div>
      <p className={classes.emotion}>{!emotion? <p>You didn't choose any emotion</p>:emotion}</p>
      <p>{!emoji ? <p>˗ˏˋ ★ ˎˊ˗</p>:emoji}</p>
    </div>
  );
}
