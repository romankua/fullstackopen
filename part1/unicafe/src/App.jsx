import { useState } from 'react'

const Button = ({ caption, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{caption}</button>
    </>
  )
}

const Header2 = ({ text }) => <h2>{text}</h2>

const FeedbackForm = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <div>
      <Header2 text="Give feedback" />
      <div>
        <Button caption='Good' onClick={onGoodClick} />
        <Button caption='Neutral' onClick={onNeutralClick} />
        <Button caption='Bad' onClick={onBadClick} />
      </div>
    </div>
  )
}

const StatisticsHeader = () => <Header2 text="Statistics" />
const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const getAverage = () => all > 0 ? (good * 1 + neutral * 0 + bad * -1) / all : 0
  const getPositive = () => all > 0 ? good / all * 100 : 0

  if (all == 0) {
    return (
      <div>
        <StatisticsHeader />
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <StatisticsHeader />
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={getAverage()} />
          <StatisticLine text="positive" value={`${getPositive()}%`} />
        </tbody>
      </table>
      
    </div>
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