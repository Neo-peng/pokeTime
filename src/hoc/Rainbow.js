import React from "react"

function Rainbow(WrappedComponent) {
  const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'pink']
  const randomColour = colours[Math.floor(Math.random() * 5)]
  const className = randomColour + '-text'

  return ((props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  })
}

export default Rainbow