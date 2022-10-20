import React, { Component } from 'react'

export default class Navbar extends Component {

  state = {
    navbarItem: [
      { id: 1, Text: 'Home', Link: '/', Icon: '',target:'' },
      { id: 2, Text: 'About Us', Link: '/about-us', Icon: '' ,target:''},
      { id: 3, Text: 'Contact', Link: '/contact-us', Icon: '',target:'' },
      { id: 4, Text: 'LinkedIn', Link: 'https://www.linkedin.com/in/emirhan-ert%C3%BCrk-0a7935187/', Icon: '',target:'_blank' },
      { id: 5, Text: 'Instagram', Link: 'https://www.instagram.com/eemirhan.erturk', Icon: '',target:'_blank' },
    ]
  }

  render() {


    return (
      <div className='navbar w-full h-[50px]'>
        <ul className='flex items-center w-full h-[50px]'>
          {
            this.state.navbarItem.map(navItem => (
              <li className='ml-10 mr-10' key={navItem.id}><a href={navItem.Link} target={navItem.target}>{navItem.Text}</a></li>
            ))
          }
        </ul>
      </div>
    )
  }
}
