import { toast } from 'react-toastify';
import { createSellerApi } from '../../apis/Api';
import Navbar from '../../components/Navbar';
import React, { useState } from 'react';
import backgroundImage from '../../assets/images/background.png';
import { Link, useNavigate } from 'react-router-dom';

const SellerRegister = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeBusinessName = (e) => {
        setBusinessName(e.target.value);
    };

    const changeBusinessPhone = (e) => {
        setBusinessPhone(e.target.value);
    };

    const changeBusinessAddress = (e) => {
        setBusinessAddress(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(businessName, businessPhone, businessAddress, email, password);

        const data = {
            businessName: businessName,
            businessPhone: businessPhone,
            businessAddress: businessAddress,
            email: email,
            password: password,
        };

        createSellerApi(data)
            .then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    navigate('/sellerLogin');
                }
            })
            .catch((err) => {
                toast.error('Server Error');
                console.log(err.message);
            });
    };

    return (
        <>
            <Navbar />
            <div
                className="image-Container"
                style={{
                    width: '1150px',
                    height: '500px',
                    backgroundImage: `URL(${backgroundImage})`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    className="register-Box"
                    style={{
                        width: '370px',
                        height: '450px',
                        backgroundColor: 'white',
                        borderRadius: '40px',
                        position: 'absolute',
                        top: '20%',
                        right: '60px',
                        padding: '40px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '5px 35px 5px 35px',
                        }}
                    >
                        <Link
                            to="/sellerLogin"
                            style={{
                                color: 'black',
                                fontSize: 25,
                                fontWeight: 'bold',
                            }}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/sellerRegister"
                            style={{
                                color: 'black',
                                fontSize: 25,
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                            }}
                        >
                            Sign Up
                        </Link>
                    </div>
                    <div>
                        <div style={{ padding: '10px 5px' }}>
                            <div className="field-group">
                                <input
                                    onChange={changeBusinessName}
                                    className="form-control mb-2"
                                    placeholder="Business Name"
                                    autoComplete="off"
                                />
                                <input
                                    onChange={changeBusinessPhone}
                                    className="form-control mb-2"
                                    placeholder="Phone Number"
                                />
                                <input
                                    onChange={changeBusinessAddress}
                                    className="form-control mb-2"
                                    placeholder="Business Location"
                                />
                                <input
                                    onChange={changeEmail}
                                    className="form-control mb-2"
                                    placeholder="Email"
                                />
                                <div className="password-field">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={changePassword}
                                        className="form-control mb-3"
                                        placeholder="Password"
                                    />
                                    <i
                                        className={`bi bi-eye${showPassword ? '-slash' : ''
                                            } eye-icon`}
                                        onClick={handleTogglePassword}
                                    ></i>
                                </div>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-danger w-100 mb-2"
                            >
                                Sign up
                            </button>

                            <div class="text-center">
                                <p class="text-muted mb-1">Go back to</p>
                                <Link to="/sellerLogin" class="btn btn-link text-primary">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerRegister;
