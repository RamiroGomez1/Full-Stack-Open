import { useState } from "react"



const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const CountOfReview = ({ review, text }) => {
  return (
    <p>{text} {review}</p>
  )
}

const Titles = ({ text }) => <h1>{text}</h1>

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (<div>No feedback given</div>)
  }

  return (
    <div>
      <CountOfReview text='good' review={props.good} />
      <CountOfReview text='neutral' review={props.neutral} />
      <CountOfReview text='bad' review={props.bad} />
      <CountOfReview text='all' review={props.allClicks.length} />
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('good'))
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('neutral'))
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('bad'))
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <Titles text='Give Feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Titles text='Statistics' />
      <Statistics allClicks={allClicks} bad={bad} good={good} neutral={neutral} />

    </div>
  )
}

export default App