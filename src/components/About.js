import React from 'react'
import Rainbow from "../hoc/Rainbow"

function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>All that we are is the result of what we have thought. Buddha</p>
    </div>
  )
}

export default Rainbow(About);