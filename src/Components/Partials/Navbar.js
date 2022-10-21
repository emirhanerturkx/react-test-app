import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  state = {
    navbarItem: [
      { id: 1, Text: 'Home', Link: '/', Icon: '', target: '' },
      { id: 2, Text: 'About Us', Link: '/about-us', Icon: '', target: '' },
      { id: 3, Text: 'Contact', Link: '/contact-us', Icon: '', target: '' },
      { id: 4, Text: 'LinkedIn', Link: 'https://www.linkedin.com/in/emirhan-ert%C3%BCrk-0a7935187/', Icon: '', target: '_blank' },
      { id: 5, Text: 'Instagram', Link: 'https://www.instagram.com/eemirhan.erturk', Icon: '', target: '_blank' },
    ]
  }

  render() {


    return (
      <div className='navbar w-full h-[50px]'>
        <ul className='flex items-center w-full h-[50px] navbar-ul'>
          <li className='ml-10 mr-10' key="1"><NavLink className='nav-item' to="/" >Home</NavLink></li>
          <li className='ml-10 mr-10' key="2"><NavLink className='nav-item' to="/about-us" >About Us</NavLink></li>
          <li className='ml-10 mr-10' key="3"><NavLink className='nav-item' to="/contact-us" >Contact</NavLink></li>
          <li className='ml-10 mr-10' key="4"><a className='nav-item' href="https://www.linkedin.com/in/emirhan-ert%C3%BCrk-0a7935187/" rel="noreferrer" target="_blank">LinkedIn</a></li>
          <li className='ml-10 mr-10' key="5"><a className='nav-item' href="https://www.instagram.com/eemirhan.erturk" rel="noreferrer" target="_blank">Instagram</a></li>
        </ul>
      </div>
    )
  }
}
