import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StaticsticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistic = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good + bad * -1) / all
  const positive = good * 100 / all 
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StaticsticLine text={'good'} value={good}/>
          <StaticsticLine text={'neutral'} value={neutral}/>
          <StaticsticLine text={'bad'} value={bad}/>
          <StaticsticLine text={'all'} value={all}/>
          <StaticsticLine text={'average'} value={average}/>
          <StaticsticLine text={'positive'} value={positive}/>
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

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text={'good'}/>
        <Button onClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
        <Button onClick={() => setBad(bad + 1)} text={'bad'}/>
      </div>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App