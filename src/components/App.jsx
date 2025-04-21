import { useState, useEffect } from 'react';
import Description from '../components/description/Description';
import Options from '../components/Options/Options';
import Feedback from '../components/feedback/Feedback';
import Notification from '../components/notification/Notification';
import styles from '../components/Options/Options.module.css';
import appstyles from '../components/App.module.css';
function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem("superMegaSpecialFeedback")) || { good: 0, neutral: 0, bad: 0 };
    return savedFeedbacks;
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const procentPositive = totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    window.localStorage.setItem("superMegaSpecialFeedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks(prev =>
      feedbackType === "reset"
        ? { good: 0, neutral: 0, bad: 0 }
        : { ...prev, [feedbackType]: prev[feedbackType] + 1 }
    );
  };

  return (
    <div className={appstyles.container}>
      <Description />
      <Options totalFeedback={totalFeedback} onFeedbackAction={updateFeedback} />
      {totalFeedback > 0 ? <Feedback value={{ ...feedbacks, totalFeedback, procentPositive }} /> : <Notification />}
    </div>
  );
}

export default App;