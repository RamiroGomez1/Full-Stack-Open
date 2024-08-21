import { useState } from "react"



const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ review, text }) => {
  return (

    <tr>
      <td>
        {text}

      </td>
      <td>
        {review}
      </td>
    </tr>

  )
}

const Titles = ({ text }) => <h1>{text}</h1>

const Average = ({ averageNumber }) => {
  return (
    <tr>
      <td>
        average
      </td>
      <td>
        {averageNumber}
      </td>
    </tr>
  )
}


const PositivePercentage = ({ positive, allClicks }) => {
  const positive_percentage = (positive.length * 100) / allClicks.length

  return (

    <tr>
      <td>
        positive
      </td>
      <td>
        {positive_percentage} %
      </td>
    </tr>

  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (<div>No feedback given</div>)
  }

  return (

    <table>
      <StatisticLine text='good' review={props.good} />
      <StatisticLine text='neutral' review={props.neutral} />
      <StatisticLine text='bad' review={props.bad} />
      <StatisticLine text='all' review={props.allClicks.length} />
      <Average averageNumber={props.averageNumber} />
      <PositivePercentage positive={props.positive} allClicks={props.allClicks} />
    </table>

  )
}





const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [positive, setPositive] = useState([])

  const [average, setAverage] = useState([])
  const sum = average.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const averageNumber = sum / average.length



  const handleGoodClick = () => {
    setAll(allClicks.concat('good'))
    setPositive(positive.concat('+'))
    setAverage(average.concat(1))
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('neutral'))
    setAverage(average.concat(0))
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('bad'))
    setAverage(average.concat(-1))
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  const statisticsProps = { positive, allClicks, averageNumber, bad, good, neutral }

  return (
    <div>
      <Titles text='Give Feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Titles text='Statistics' />
      <Statistics {...statisticsProps} />
    </div>
  )
}

export default App