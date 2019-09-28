import React from 'react'

function Contact(props) {
  setTimeout(() => {
    props.history.push("./about")
  }, 2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>All that we are is the result of what we have thought. Buddha</p>
    </div>
  )
}

export default Contact