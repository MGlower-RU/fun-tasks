import { useEffect, useRef, useState } from 'react';
import '../styles/infinite-scrolling.scss'

export default function InfiniteScrolling() {
  const lastElement = useRef(null)
  const [elementsArray, setElementsArray] = useState([
    {
      text: 'Привет'
    },
    {
      text: 'Салам алейкум'
    },
    {
      text: 'Hello'
    },
    {
      text: 'Bonjour'
    },
    {
      text: 'Guten tag'
    },
    {
      text: 'Hola'
    },
    {
      text: 'Chao'
    },
    {
      text: 'Aloha'
    },
    {
      text: 'Buenas dias'
    },
    {
      text: 'Привіт'
    },
    {
      text: 'Dobry den'
    },
    {
      text: 'Konnichi wa'
    },
  ])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    }
    const callback = function(entries) {
      entries[0].isIntersecting && setElementsArray([...elementsArray, {text: elementsArray[Math.floor(Math.random()*12)].text}])
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(lastElement.current)

    return () => observer.disconnect()
  }, [lastElement, elementsArray, setElementsArray])

  return (
    <div className="intersection-observer">
      {
        elementsArray.map((el, i) => {
          return (
            <div
              key={i}
              className="intersection-observer__el"
              ref={lastElement}
            >
              {el.text}
            </div>
          )
        })
      }
    </div>
  )
}