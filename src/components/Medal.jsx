const Medal = ({ type, amount }) => {
  
  return (
    <>
      {amount > 0 &&
        <div className="score"><span>{amount}</span>{type}</div>
      }
      </>
  )
}

export default Medal
