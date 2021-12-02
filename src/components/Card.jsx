import React from 'react';
import './Card.css'
import Medal from './Medal';

export const Card = ({ data }) => {

  return(
    < div className = "card" >
      <div className="card-header" style={{backgroundImage: `url(${data.background}`}}>
        <h2>{data.name} {data.surname}</h2>
        <div className="awatar-section"><img src={data.avatar} alt="awatar"/></div>
      </div>
      <div className="card-body">
        <h3>Rewards</h3>
        <div className="rewards-section">
          <Medal amount={data.bronze} type='Bronze' />
          <Medal amount={data.silver} type='Silver'/>
          <Medal amount={data.gold} type='Gold'/>

        </div>
      </div>
    </div>
  )
}