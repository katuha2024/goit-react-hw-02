import styles from './Options.module.css';

export default function Options({ totalFeedback, onFeedbackAction }) {
    return (
    <div className={styles.options}>
 <button type='button' data-type="good" aria-label='Good feedback button' onClick={onFeedbackAction}>Good</button>
            <button type='button' data-type="neutral" aria-label='Neutral feedback button' onClick={onFeedbackAction}>Neutral</button>
            <button type='button' data-type="bad" aria-label='Bad feedback button' onClick={onFeedbackAction}>Bad</button>
            {totalFeedback > 0 && <button type='button' data-type="reset" aria-label='Reset feedback button' onClick={onFeedbackAction}>Reset</button>}
    </div>
)
}