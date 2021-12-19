import { useEffect, useRef, useState } from 'react'
import '../styles/rain.scss'

export default function Rain({particlesNumber}) {
  const [rainContainerBoundings, setrainContainerBoundings] = useState({width: 0, height: 0});
  const rainContainer = useRef();

  useEffect(() => {
    rainContainer.current && setrainContainerBoundings({
      width: rainContainer.current.getBoundingClientRect().width,
      height: rainContainer.current.getBoundingClientRect().height
    })
  }, [])

  return (
    <div className="rain" ref={rainContainer}>
      {
        rainContainerBoundings.width !== 0 && Array(particlesNumber).fill('').map((el, i) => {
          const width = Math.random() * 9 + 1
          const height = (Math.random() * (rainContainerBoundings.height*0.4 - 20) + 20).toFixed(0)
          const delay = -(Math.random() * 1000).toFixed(0);
          const duration = (Math.random() * 1500 + 200).toFixed(0);
          const rgb = {
            red: Math.ceil(Math.random() * 255),
            green: Math.ceil(Math.random() * 255),
            blue: Math.ceil(Math.random() * 255),
          }

          return (
            <span
              key={i}
              style={{
                height: `${height}px`,
                width: `${width}px`,
                left: `${(Math.random()*(rainContainerBoundings.width - width)).toFixed(0)}px`,
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
                backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`
              }}
            ></span>
          )
        })
      }
    </div>
  )
}