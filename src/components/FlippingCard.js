import '../styles/flipping-card.scss'

export default function FlippingCard() {
  return (
    <div className="card">
      <div className="card__front">
        <h1>Some front text</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facere! Tenetur accusantium veritatis id ut, assumenda aperiam corrupti facere nostrum quia laboriosam in eius voluptatem reiciendis nisi quos fuga provident!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="card__back">
        <h1>Text you can see behind</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facere! Tenetur accusantium veritatis id ut, assumenda aperiam corrupti facere nostrum quia laboriosam in eius voluptatem reiciendis nisi quos fuga provident!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}