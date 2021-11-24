import React from 'react';
import './Card.css'

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
          {data.bronze !== 0 &&
            <div className="score"><span>{data.bronze}</span>Bronze</div>
          }
          {data.silver !== 0 &&
            <div className="score"><span>{data.silver}</span>Silver</div>
          }
          {data.gold !== 0 &&
            <div className="score"><span>{data.gold}</span>Gold</div>
          }

        </div>
      </div>
    </div>
  )
}