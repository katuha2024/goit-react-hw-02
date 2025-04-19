import { useState } from 'react';
import Description from '../components/description/Description';
import Options from  '../components/Options/Options';
import Styles from '../components/Options/Options.module.css'

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
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
    </div>
  );
}

export default App;