import React, { useState } from 'react'
import BlogList from '../BlogList';

const Home = () => {

  const handleClick = () => {
    console.log('Hello!');
  }

  const handleClick2 = (name,e) => {
    console.log('name', name, e.target);
  }

  const [counter, setCounter] = useState(0);
  const handleClick3 = () => {
    setCounter(5);
    console.log('counter', counter);
  }

  const [course, setCourse] = useState([
    {
      name: "React for beginners",
      description: "Welcome to adventure of REACTJS",
      writer: "The React Developers Group",
      id: 1
    },
    {
      name: "Node for beginners",
      description: "Welcome to adventure of NODEJS",
      writer: "The Node Developers Group",
      id: 2
    },    {
      name: "Firebase for beginners",
      description: "Welcome to adventure of Firebase",
      writer: "Google Group",
      id: 3
    },
  ])

  return (
    <>
    <div>
        <h2>HomePage</h2>
        <button onClick={handleClick}>Click1</button>
        <button onClick={handleClick('Okan')}>Click2</button>
        <button onClick={(e)=>handleClick2('Okan', e)}>Click2</button>
        
        <p>{counter}</p>
        <button onClick={handleClick3}>Click3</button>
    </div>
    <div className='home'>
      <BlogList blogs={course} />
    </div>
    </>
  )
}

export default Home