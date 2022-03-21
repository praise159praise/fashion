import React, { useState } from 'react';
import { FaRegHeart, FaCartPlus, FaUserAlt, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    const [browse, setBrowse] = useState(false)
    return <div className='nav' >

        <div className='nav-items' >
            <Link to='/' className='link'> <div > Home </div></Link>
            <Link to='/designers' className='link'> <div > Designers </div></Link>
            <Link to='/recents' className='link'> <div > Recents </div></Link>
            <Link to='/contact' className='link'> <div > Contact Us </div></Link>
            < div style={
                { display: 'flex', alignItems: 'center', position: 'relative' }} onClick={() => { setBrowse(!browse) }}> Browse < FaCaretDown

                    style={browse && { transform: 'rotate(180deg)' }}
                    className='caret'
                /> {browse &&
                    <div className='browse-menu' >
                       <Link to='/men' className='linkitem'> <div> Men </div></Link>
                       <Link to='/women' className='linkitem'> <div> Women </div></Link>
                       <Link to='/children' className='linkitem'> <div> Children </div></Link>

                    </div>} </div >
        </div>
        <Link to='/'><div className='logo' > <div> S </div> SUAVE</div ></Link>

        <div className='right-side' >
            <Link to="/wishlist"><FaRegHeart /></Link>
            <Link to="/cart"><FaCartPlus /></Link>
            <Link to="/user"><FaUserAlt  /></Link>
        </div>

    </div>;
};

const Search = () => {
    return (
        <div>Hello we are searching </div>
    )
}

export default Navbar;