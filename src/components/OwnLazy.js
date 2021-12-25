import { Fragment, useEffect, useRef, useState } from "react"

import '../styles/infinite-scrolling.scss'

export default function OwnLazy() {
  const elementsPerPage = 5;
  const [page, setPage] = useState(1)
  const lastElement = useRef(null)
  const [elementsArray] = useState([
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
    const observer = new IntersectionObserver(entries => {
      entries[0].isIntersecting && setPage(page => page + 1)
    })
    observer.observe(lastElement.current)

    return () => observer.disconnect()
  }, [page, lastElement])

  return (
    <div className="intersection-observer">
      {
        elementsArray.slice(0, elementsPerPage * page).map((el, i) => {
          return (
            <Fragment key={i}>
              <div
                className="intersection-observer__el"
                ref={lastElement}
              >
                {el.text}
              </div>
              {((i+1) % elementsPerPage === 0) && (i !== 0) && <span />}
            </Fragment>
          )
        })
      }
    </div>
  )
}