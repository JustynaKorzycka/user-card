import React from 'react';
import './Card.css'

export const Card = ({ userName, userSurname, awatar, rewards }) => {
  return(
    < div className = "card" >
      <div className="card-header">
        <h2>{userName} {userSurname}</h2>
        <div className="awatar-section"><img src={awatar} alt="awatar"/></div>
      </div>
      <div className="card-body">
        <h3>Rewards</h3>
        <div className="rewards-section">
          <div className="score"><span>{rewards.bronze}</span>Bronze</div>
          <div className="score"><span>{rewards.silver} </span>Silver</div>
          <div className="score"><span>{rewards.gold} </span>Gold</div>
        </div>
      </div>
    </div>
  )
}