import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: 'What is the capital of India?',
      answerOptions: [
        { answerText: 'New Delhi', isCorrect: true },
        { answerText: 'Mumbai', isCorrect: false },
        { answerText: 'Kolkata', isCorrect: false },
        { answerText: 'Chennai', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the national sport of India?',
      answerOptions: [
        { answerText: 'Cricket', isCorrect: false },
        { answerText: 'Kabaddi', isCorrect: false },
        { answerText: 'Hockey', isCorrect: true },
        { answerText: 'Football', isCorrect: false },
      ],
    },
    {
      questionText: 'What is India’s national flower?',
      answerOptions: [
        { answerText: 'Rose', isCorrect: false },
        { answerText: 'Lotus', isCorrect: true },
        { answerText: 'Lily', isCorrect: false },
        { answerText: 'Jasmine ', isCorrect: false },
      ],
    },
    {
      questionText: 'What is India’s national bird?',
      answerOptions: [
        { answerText: 'Pigeons', isCorrect: false },
        { answerText: 'Parrot', isCorrect: false },
        { answerText: 'Eagle', isCorrect: false },
        { answerText: 'Peacock', isCorrect: true },
      ],
    },
    {
      questionText: 'What is India’s national animal?',
      answerOptions: [
        { answerText: 'Tiger', isCorrect: true },
        { answerText: 'Lion', isCorrect: false },
        { answerText: 'Bear', isCorrect: false },
        { answerText: 'Horse', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Questions {currentQuestion + 1}</span>
                  </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;