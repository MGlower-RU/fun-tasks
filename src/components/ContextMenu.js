import { useContext, useEffect, useRef, useState } from "react"
import { MainContextComponent } from "./MainContext"

import '../styles/context-menu.scss'

export default function ContextMenu() {
  const { isContextMenu, setIsContextMenu } = useContext(MainContextComponent)

  const contextMenuRef = useRef(null)
  const [menuPos, setMenuPos] = useState({left: 0, top: 0})
  const itemsArray = [
    {
      name: 'Эмодзи',
      link: '/'
    },
    {
      name: 'Отправить на устройство "Xiaomi Телефон"',
      link: '/'
    },
    {
      name: 'Отменить',
      link: '/'
    },
    {
      name: 'Вырезать',
      link: '/'
    },
    {
      name: 'Копировать',
      link: '/'
    },
    {
      name: 'Вставить',
      link: '/'
    },
    {
      name: 'Вставить и найти "<a href="/">Hello</a>"',
      link: '/'
    },
  ]

  useEffect(() => {
    function openContextMenu(e) {
      e.preventDefault()
      setIsContextMenu(true)

      const mainContainer = e.target.closest('#root').getBoundingClientRect()
      const menuContainer = contextMenuRef.current.getBoundingClientRect()

      // **TRY TO FIND SOLUTION(HOW TO UPDATE USESTATE IN FUNCTION TWICE)**
      if(mainContainer.width < e.clientX + menuContainer.width) {
        setMenuPos({top: contextMenuRef.current.style.top.match(/\d+/)[0], left: e.clientX - menuContainer.width})
      } else {
        setMenuPos({top: contextMenuRef.current.style.top.match(/\d+/)[0], left: e.clientX})
      }

      if(mainContainer.height < e.clientY + menuContainer.height) {
        setMenuPos({left: contextMenuRef.current.style.left.match(/\d+/)[0], top: e.clientY - menuContainer.height})
      } else {
        setMenuPos({left: contextMenuRef.current.style.left.match(/\d+/)[0], top: e.clientY})
      }
    }

    function hideContextMenu(e) {
      (!e.target.closest('.context-menu') || e.target.closest('.context-menu a')) && setIsContextMenu(false)
    }
  
    window.addEventListener('contextmenu', openContextMenu)
    if(isContextMenu) window.addEventListener('click', hideContextMenu)

    return () => {
      window.removeEventListener('contextmenu', openContextMenu)
      window.removeEventListener('click', hideContextMenu)
    }
  }, [isContextMenu, setIsContextMenu, menuPos])

  return (
    <>
    {
      isContextMenu &&
      <div
        className="context-menu"
        ref={contextMenuRef}
        style={{
          top: menuPos.top,
          left: menuPos.left
        }}
      >
        <ul>
          {itemsArray.map((el, i) => {
            return (
              <li key={i}>
                <a
                  href={el.link}
                  draggable='false'
                >{el.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    }
    </>
  )
}