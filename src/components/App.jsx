import { useState } from 'react';
import Description from '../components/description/Description';
import css from './App.module.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div className={css.app}>
      <Description />
      <Options updateFeedback={updateFeedback} />
    </div>
  );
}

export default App;