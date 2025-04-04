import { useState } from 'react'

const AnecdoteDisplay = ({header, anecdoteText, anecdoteVotes}) => (
  <div>
    <h1>{header}</h1>
    <p>{anecdoteText}</p>
    <p>has {anecdoteVotes} vote(s)</p>
  </div>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const mostVotesId = [...votes].reduce((indexOfMax, value, index) => 
    votes[indexOfMax] <= value ? index : indexOfMax, 
    0
  )

  const handleNextAnecdoteClick = () => {
    const nextAnecdoteId = Math.floor(Math.random() * anecdotes.length)
    console.log(nextAnecdoteId)
    setSelected(nextAnecdoteId)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  return (
    <div>
      <AnecdoteDisplay 
        header={'Anecdote of the day'}
        anecdoteText={anecdotes[selected]}
        anecdoteVotes={votes[selected]}
      />
      <Button onClick={handleVoteClick} text={'vote'}/>
      <Button onClick={handleNextAnecdoteClick} text={'next anecdote'}/>
      <AnecdoteDisplay 
        header={'Anecdote with most votes'} 
        anecdoteText={anecdotes[mostVotesId]}
        anecdoteVotes={votes[mostVotesId]}
      />
    </div>
  )
}

export default App