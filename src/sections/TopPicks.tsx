import React from 'react'
import TopPicksWommen from '../assets/images/top-picks-wommen.svg'
import Conscious from '../assets/images/Conscious.svg'
import { NavLink } from 'react-router-dom'

const TopPicks = () => {
  return (
    <section className="top-picks">
    <div className="container">
        <div className="card">
                <div className="card-body">
                    <img src={TopPicksWommen} alt="top picks images"/>
                    <h1>Pamela Reif's <br/>Top Picks</h1>
                    <NavLink className="btn btn-lg btn-white" to="/shopnow" end>SHOP NOW</NavLink>
                </div>
        </div>

        <div className="card">
                <div className="card-body">
                    <img src={Conscious} alt="top picks images"/>
                    <h1 id="Conscious">Let's Be <br/> Conscious</h1>
                    <NavLink id="Conscious-btn" className="btn btn-lg btn-white" to="/flashesale" end>FLASE SALE</NavLink>
                </div>
        </div>
    </div>
</section>
  )
}

export default TopPicks