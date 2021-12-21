import { useEffect, useRef, useState } from 'react'
import '../styles/resizable-block.scss'

export default function ResizableBlock() {
  const [dragDimensions, setDragDimensions] = useState({
    startY: 0,
    containerHeight: 0
  })
  const resizableStick = useRef(null)

  useEffect(() => {
    const { current } = resizableStick

    function initDrag(e) {
      setDragDimensions({
        startY: e.clientY,
        containerHeight: e.target.closest('.resizable').getBoundingClientRect().height
      })
  
      window.addEventListener('mousemove', doDrag)
      window.addEventListener('mouseup', stopDrag)
    }

    function doDrag(e) {
      setDragDimensions({
        ...dragDimensions,
        currentHeight: dragDimensions.containerHeight - (e.clientY - dragDimensions.startY)
      })
    }
  
    function stopDrag(e) {
      window.removeEventListener('mouseup', stopDrag)
      window.removeEventListener('mousemove', doDrag)
    }

    current.addEventListener('mousedown', initDrag)
    return () => current.removeEventListener('mousedown', initDrag)
  }, [dragDimensions])

  return (
    <div
      className="resizable"
      style={{
        height: dragDimensions.startY !== 0 ? dragDimensions.currentHeight : ''
      }}
    >
      <div className="resizable-stick" ref={resizableStick}></div>
      <h1>
        Hello world
      </h1>
      <h2>
        Some feature text
      </h2>
      <p>
        Description for the resizable
      </p>
    </div>
  )
}