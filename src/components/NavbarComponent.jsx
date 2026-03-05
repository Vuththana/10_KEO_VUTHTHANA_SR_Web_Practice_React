import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <>
        <Link to={"/"}>Show User </Link>
        <p className='mx-10'>|</p>
        <Link to={"/contact-us"}>Contact Us</Link>
    </>
  )
}
