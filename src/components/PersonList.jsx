import React from "react"
import people from "../data"
import Person from "./Person"
const PersonList = () => {
  return (
    <div className="container">
      <h3>5 birthdays today</h3>
      {people.map(person => (
        <Person person={person} key={person.id} />
      ))}
    </div>
  )
}

export default PersonList
