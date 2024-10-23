import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul >
        <li><Link to ={'/'}>Home</Link></li>
        <li><Link to ={'about'}>about</Link></li>
        <li><Link to ={'content'}>Content</Link></li>
        <li><Link to ={'serveres'}>Servese</Link></li>
    </ul>
    </>
  )
}

export default Navbar
