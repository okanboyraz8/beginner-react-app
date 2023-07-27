import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h1>React Blog | App Component</h1>
        <div className='links'>
            <a href="/">HomePage</a>
            <a href="/create" style={{
              color:'white',
              backgroundColor:'#ff793f',
              borderRadius:'8px'
            }}>New Post</a>
        </div>
    </nav>
    <div></div>
    </>
  )
}

export default Navbar