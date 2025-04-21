import styles from './Feedback.module.css';
export default function Feedback({ value }) {
  const { good, neutral, bad, totalFeedback, procentPositive } = value;
  return (
    <div className={styles.container}>
      <p className={styles.item}>Good: {good}</p>
      <p className={styles.item}>Neutral: {neutral}</p>
      <p className={styles.item}>Bad: {bad}</p>
      <p className={styles.item}>Total: {totalFeedback}</p>
      <p className={styles.item}>Positive: {procentPositive}%</p>
    </div>
  );
}
