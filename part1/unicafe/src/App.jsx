import { useState } from 'react'

const Button = ({ caption, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{caption}</button>
    </>
  )
}

const FeedbackForm = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button caption='Good' onClick={onGoodClick} />
      <Button caption='Neutral' onClick={onNeutralClick} />
      <Button caption='Bad' onClick={onBadClick} />
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <FeedbackForm onGoodClick={handleGoodClick} onNeutralClick={handleNeutralClick} onBadClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App