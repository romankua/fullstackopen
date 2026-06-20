import { useState } from 'react'

const Button = ({ caption, onClick }) => {
  return (
    <button onClick={onClick}>{caption}</button>
  )
}

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const AnecdoteBlock = ({ header, anecdote, votes }) => {
  return (
    <div>
      <h2>{header}</h2>
      <Anecdote text={anecdote} votes={votes} />
    </div>
  )
}

const Controls = ({ onNext, onVote }) => {
  return (
    <div>
        <Button caption="vote" onClick={onVote} />
        <Button caption="next anecdote" onClick={onNext} />
      </div>
  )
}

const MostVotedAnecdote = ({ anecdotes, votes, index }) => {
  if (index < 0) {
    return (<></>)
  }

  return (
    <>
      <AnecdoteBlock header="Anecdote with most votes" anecdote={anecdotes[index]} votes={votes[index]} />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const [mostIndex, setMostIndex] = useState(-1)

  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const newVotes = votes.with(selected, votes[selected] + 1)

    if (mostIndex < 0) {
      setMostIndex(selected)
    } else if (newVotes[selected] > newVotes[mostIndex]) {
      setMostIndex(selected)
    }

    setVotes(newVotes)
  }

  return (
    <div>
      <AnecdoteBlock header="Anecdote of the day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Controls onNext={handleNext} onVote={handleVote} />
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} index={mostIndex}/>
    </div>
  )
}

export default App