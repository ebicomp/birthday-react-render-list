import React from "react"

const Person = ({ person }) => {
  return (
    <div className="person">
      <img className="img" src={person.image} />
      <div>
        <p>{person.age}</p>
        <h4>{person.name}</h4>
      </div>
    </div>
  )
}

export default Person
