import React from 'react'

const Home = (props) => {  //Don't apply "{}" when using keyword like 'props'
  return (
    <div>
        <h2>{props.value}</h2>

        <button>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Home