import '../styles/color-contrast.scss'

export default function ColorContrast() {
  function setColor(red, green, blue) {
    return ((red * 299) + (green * 587) + (blue * 114)) / 255000 >= 0.5 ? "black" : "white"
  }

  return (
    <div className="color-contrast">
      {
        Array.apply(null, Array(50)).map((_, i) => {
          const colors = {
            red: Math.random()*255,
            green: Math.random()*255,
            blue: Math.random()*255
          }
          return (
            <div
              key={i}
              className="color-contrast__item"
              style={{
                backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
                color: setColor(colors.red, colors.green, colors.blue)
              }}
            >
              <h1>Colored item {i}</h1>
            </div>
          )
        })
      }
    </div>
  )
}