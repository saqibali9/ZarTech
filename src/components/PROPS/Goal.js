import React from 'react'

const Goal = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h6>{props.goals}</h6>
      <h6>{props.salary}</h6>
    </div>
  )
}

export default Goal;