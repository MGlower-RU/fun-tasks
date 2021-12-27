import { useState } from 'react'

import '../styles/moving-image.scss'

export default function MovingImage({src}) {
  const [imagePos, setImagePos] = useState({x: 0, y: 0})

  function observingImage(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setImagePos({x, y});
  }

  return (
    <div
      className="image-move"
      onMouseMove={observingImage}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${imagePos.x}% ${imagePos.y}%`
      }}
    >
      <img src={src} alt="" />
    </div>
  )
}