import { useEffect, useState } from 'react'
import '../styles/cps.scss'

export default function CPSmeter() {
  const CPS_TIME = 5;

  const [isStarted, setIsStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(CPS_TIME)

  function startScore() {
    setIsStarted(true)
    if(time > 0) setScore(score => score + 1)
  }

  function resetScore() {
    setScore(0)
    setTime(CPS_TIME)
    setIsStarted(true)
  }

  useEffect(() => {
    if(time !== 0 && isStarted) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000);
    } else {
      setIsStarted(false)
    }
  }, [isStarted, time])

  return (
    <div className="cps__wrapper">
      <div className="cps" onClick={startScore}>
        <h1>CPS meter</h1>
        <h1>Timer: {time}</h1>
        <h1 className="cps__score">{score}</h1>
      </div>
      <div
        className="reset"
        style={{
          display: isStarted ? 'none' : 'flex'
        }}
      >
        <div className="end__score">{score > 0 && `Your score is: ${score} (${(score/CPS_TIME).toFixed(1)} per second)`}</div>
        <span onClick={resetScore}>Start</span>
      </div>
    </div>
  )
}