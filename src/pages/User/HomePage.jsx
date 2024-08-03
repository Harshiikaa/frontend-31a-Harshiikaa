import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/2.png'
import logo1 from '../../assets/images/1.png'
import logo2 from '../../assets/images/carousel.png'
import SearchIcon from '@mui/icons-material/Search';
import '../User/HomePage.css';
import UserNavbar from '../../components/UserNavbar';
import { getAllProductsApi, searchApi } from '../../apis/Api';
import Categories from '../../components/Categories';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();

    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [sortBy, setSortBy] = useState('Sort by Minimum Price');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]); // State to store all products

    const toggleNav = () => {
        setSidebarWidth(sidebarWidth === 250 ? 0 : 250);
    };

    const handleSearch = async (e) => {
        getAllProductsApi().then((res) => {
            const productsData = res.data.products;

            // Filter products based on productName matching searchQuery
            const filteredProducts = productsData.filter((product) => product.productName === searchQuery);

            // Set the filtered products
            setProducts(filteredProducts);
        });
    }

    // Fetch all products on component mount
    useEffect(() => {
        getAllProductsApi().then((res) => {
            const productsData = res.data.products;
            setProducts(productsData);
        });
    }, []);

    const sortProducts = (option) => {
        let sortedProducts = [...products];
        if (option === 'Sort by Minimum Price') {
            sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
        } else if (option === 'Sort by Maximum Price') {
            sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
        }
        setProducts(sortedProducts);
    };


    return (

        <div>

            <UserNavbar />
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

            <div className='search-section' style={{ display: 'flex', justifyContent: 'center' }}>
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
            </div>


            <div className='main-body'>


                <Categories />
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={logo} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={logo1} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={logo2} class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h3>Recommended Products</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 d-flex justify-content-between align-items-center">
                        {/* Dropdown for sorting with added margin using Bootstrap utility class */}
                        <select
                            id="sortDropdown"
                            className="form-select my-3"  // Adjust the margin as needed
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                sortProducts(e.target.value);
                            }}
                        >
                            <option value="Sort by Minimum Price">Sort by Minimum Price</option>
                            <option value="Sort by Maximum Price">Sort by Maximum Price</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-5 g-4">
                {products.map((item) => (
                    <div key={item._id} className="col mb-4">
                        <a href={`/user/productDetails/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card">
                                <img src={item.productImageURL} className="card-img-top" alt={`Card logo for ${item.productName}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-price-range">NPR. {item.productPrice}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage
