import React from 'react'
import Link from 'next/link';
const Topbar = () => {
  return (
    <nav className='bg-gray-800 py-4 sticky top-0 z-50'>
          <div className='container mx-auto flex justify-between items-center '>
            <div className="text-white font-bold">
                <Link href="/">
                   Content.Io
                </Link>
            </div>
            <ul className="flex space-x-4">
              <li className='text-white'>
                <Link  href = "/">
                   Home
                </Link>
              </li>
              <li className='text-white'>
                <Link  href = "/fe/sources">
                   Sources
                </Link>
              </li>
              <li className='text-white'>
                <Link  href = "/fe/about">
                   AboutProject
                </Link>
              </li>
          
            </ul>
          </div>
    </nav>
  )
}

export default Topbar;