import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

//styles
import './TopNav.css'

export default function TopNav() {
  return (
    <div className="top-nav">
        <div className='accordion'>
           <h1><span>Exclusive</span> Products</h1>
           <p>Search for amazing products to buy from our colection</p>
        </div>

        <div className='search-bar'>
            <form>
                <input type="text"  placeholder='What do you need?' />
                <button>Search</button>
            </form>
            </div>

            <div className='telephone'>
                <PhoneIcon/>
            <span>+234xxxxxxx</span>
            </div>

    </div>
  )
}
