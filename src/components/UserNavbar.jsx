import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../components/UserNavbar.css'
import SearchIcon from '@mui/icons-material/Search';

import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { LogoutOutlined } from '@mui/icons-material';

import HistoryIcon from '@mui/icons-material/History';
import { searchApi } from '../apis/Api';

const UserNavbar = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]);  // State to store all products

    const handleSearch = async () => {
        if (searchQuery.trim() !== '') {
            try {
                const response = await searchApi(searchQuery);
                // Handle the response, e.g., navigate to a search results page
                console.log('Search results:', response.data);
                navigate(`/user/searchResults/${searchQuery}`);

            } catch (error) {
                console.error('Error searching:', error.message);
                // Handle error
            }
        }
    };

    const logout = () => {
        const confirmDialog = window.confirm('Are you sure, you want to logout?')
        if (!confirmDialog) {
            return;
        }
        else {
            // localStorage.removeItem('token');
            localStorage.clear();
            console.log('User logged out successfully');
            navigate('/login')
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    <div className="logo-container"><img src={logo} alt="Company Logo" className="logo" /> </div>
                    {/* <div className='search-section'>
                        <div className="search-container">
                            <input type="text" placeholder="Search" className="search-input" value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} />
                            <div className="gradient-background" style={{ width: 100, height: 40, position: 'relative' }}>
                                <div className="gradient-box" style={{ width: 50, height: 40, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)' }}></div>
                                <div className="gradient-content" style={{ width: 50, left: 5, top: 11, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <div className="gradient-text" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }} onClick={handleSearch}>
                                        <SearchIcon style={{ marginRight: 5 }} onClick={handleSearch} />
                                        Search
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='right-buttons'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <a className="nav-link" aria-current="page" href="/user/home">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <HomeIcon style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Home</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <a className="nav-link" aria-current="page" href="/user/favorites">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <FavoriteIcon style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Favorites</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <a className="nav-link" aria-current="page" href="/user/profile">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <PersonIcon style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Profile</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <a className="nav-link" aria-current="page" href="/user/myCart">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <ShoppingCartIcon style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Cart</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <a className="nav-link" aria-current="page" href="/user/orderHistory">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <HistoryIcon style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Orders</span>
                                        </div>
                                    </a>
                                </li>


                                <li className="nav-item" style={{ textAlign: 'center' }}>
                                    <button className="nav-link" onClick={logout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <LogoutOutlined style={{ fontSize: 24 }} />
                                            <span style={{ fontSize: 14, marginTop: 4 }}>Logout</span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default UserNavbar
