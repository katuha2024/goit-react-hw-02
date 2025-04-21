import styles from './Options.module.css';

export default function Options({ totalFeedback, onFeedbackAction }) {
    return (
        <div className={styles.container}>
            <button className={styles.btn} type='button' aria-label='Good feedback button' onClick={() => onFeedbackAction("good")}>Good</button>
            <button className={styles.btn} type='button' aria-label='Neutral feedback button' onClick={() => onFeedbackAction("neutral")}>Neutral</button>
            <button className={styles.btn} type='button' aria-label='Bad feedback button' onClick={() => onFeedbackAction("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button className={styles.btn} type='button' aria-label='Reset feedback button' onClick={() => onFeedbackAction("reset")}>
                    Reset
                </button>
            )}
        </div>
    );
}