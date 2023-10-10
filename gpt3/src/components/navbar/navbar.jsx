import React from 'react'
import './navbar.css'
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'



// BEM - Block Element Modifier. we use this to name our css class conventions

const navbar = () => {
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default navbar
