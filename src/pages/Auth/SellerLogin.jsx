import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginSellerApi } from '../../apis/Api';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/background.png';
import Navbar from '../../components/Navbar';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SellerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        const data = {
            email: email,
            password: password,
        };

        loginSellerApi(data)
            .then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    localStorage.setItem('token', res.data.token);
                    const jsonDecode = JSON.stringify(res.data.sellerData);
                    localStorage.setItem('seller', jsonDecode);
                    navigate('/seller/dashboard');
                }
            })
            .catch((err) => {
                toast.error('Error in server');
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 35px 5px 35px' }}>
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Enter your Email"
                                ></input>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control mb-3"
                                        placeholder="Enter your Password"
                                    ></input>
                                    <span
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '10px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleTogglePassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </span>
                                </div>
                                <a href="/forgotPassword" className="btn btn-link text-primary">
                                    Forgot Password?
                                </a>
                                <button onClick={handleSubmit} className="btn btn-danger w-100 mb-4">
                                    Sign in
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mb-2">Don't have a seller account yet?</p>
                                <Link to="/sellerRegister" className="btn btn-link text-primary">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerLogin;
