import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomerService from '../assets/images/customer-service.svg'
import CreditCard from '../assets/images/credit-card.svg'
import DeliveryTruck from '../assets/images/delivery-truck.svg'

const SupportSection = () => {
  return (
    <section className="support">
        <div className="container">
            <div className="icons-support">
                <NavLink to={''}><span className="dot"><img src={CustomerService} alt="customer service"/></span></NavLink>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed <br/> explain talking.</p>
            </div>

            <div className="icons-support">
                <NavLink to={''}><span className="dot"><img src={CreditCard} alt="credit card"/></span></NavLink>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed <br/> explain talking.</p>
            </div>

            <div className="icons-support">
                <NavLink to={''}><span className="dot"><img src={DeliveryTruck} alt="delivery truck"/></span></NavLink>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed <br/> explain talking.</p>
            </div>

            <div className="icons-support">
                <NavLink to={''}><span className="dot"><img src={DeliveryTruck} alt="delivery truck"/></span></NavLink>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed <br/> explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default SupportSection