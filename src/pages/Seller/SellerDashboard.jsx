import React from 'react';
import SellerNavbar from '../../components/SellerNavbar';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const SellerDashboard = () => {
    const navigate = useNavigate();

    const logout = () => {
        const confirmDialog = window.confirm('Are you sure you want to logout?');
        if (!confirmDialog) {
            return;
        } else {
            localStorage.clear();
            console.log('Seller logged out successfully');
            navigate('/sellerLogin');
        }
    };

    const cardStyle = {
        width: '10rem', // Adjust the width as needed
        height: '5rem', // Adjust the height as needed
        backgroundColor: '#007BFF',
        color: 'white',
    };

    return (
        <div>
            <SellerNavbar />
            <h2 style={{ textAlign: 'center' }}>Seller Dashboard</h2>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col mb-4">
                        <Link to="/seller/products" className="text-decoration-none">
                            <Card style={cardStyle}>
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title>Products</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    {/* <div className="col mb-4">
                        <Link to="/seller/orders" className="text-decoration-none">
                            <Card style={cardStyle}>
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title>Orders</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div> */}
                    <div className="col mb-4">
                        <Link to="/seller/profile" className="text-decoration-none">
                            <Card style={cardStyle}>
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title>Profile</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    {/* <div className="col mb-4">
                        <Link to="/seller/ratingAndReview" className="text-decoration-none">
                            <Card style={cardStyle}>
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title>Rating and Review</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div> */}
                    <div className="col mb-4">
                        <Card onClick={logout} style={cardStyle}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title>Logout</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;
