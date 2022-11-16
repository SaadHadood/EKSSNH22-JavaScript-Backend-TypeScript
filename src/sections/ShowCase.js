import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowCase = () => {
  return (
  <section className="showcase">
      <div className="container">
          <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="female sitting" />
          <div className="showcase-body">
              <h1>SALE UP <br/> To 50% Off</h1>
              <p>Online shopping free home delivery over $100</p>
              <NavLink className="btn btn-lg btn-white" to="/shopnow" end>SHOP NOW</NavLink>
          </div>
          <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="model man" />
      </div>
</section>

  )
}

export default ShowCase