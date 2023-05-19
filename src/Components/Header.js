import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';

const Header=()=>{
    return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <img src={Logo} alt='' className='w-11'/>
            <p className='font-bold text-purple-950'>PaciLand</p>
          </Link>
          <div className='flex gap-x-1'>
            <Link className='hover:text-violet-900 transition border border-gray-500 rounded-lg px-5 py-3' to=''>Login</Link>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to=''>Register</Link>
          </div>
      </div>
    </header>
    )
}
export default Header;