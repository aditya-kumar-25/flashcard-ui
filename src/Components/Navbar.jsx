import React from 'react'
import '../index.css'
import Hamburger from './Hamburger'

const navbarLinks = [
    {
        title:'Home',
        path:'/',
    },
    {
        title:'Flashcard',
        path:'/flashcard',
    },
    {
        title:'Contact',
        path: '/contact',
    },
    {
        title: 'FAQ',
        path: '/faq',
    }
]

function Navbar() {

  return (
    <div className='flex justify-between'>
        <img src='../src/assets/logo.svg' className='max-h-[30px] aspect-auto mr-5 flex-shrink'/>
        <ul className='hidden md:flex items-center gap-10'>
            {
                navbarLinks.map((link, index) => (
                    <li key={index}>
                        <a className=' font-[400]' href={link.path}>{link.title}</a>
                    </li>
                ))
            }
            <li><a href='/login' className='primary-gradient px-3 py-1 rounded-full text-sm font-[500]'>Login</a></li>
        </ul>
        <Hamburger />
    </div>
  )
}

export default Navbar
