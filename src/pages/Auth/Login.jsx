import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/background.png';
import Navbar from '../../components/Navbar';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        loginUserApi(data)
            .then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    localStorage.setItem('token', res.data.token);
                    const jsonDecode = JSON.stringify(res.data.userData);
                    localStorage.setItem('user', jsonDecode);
                    navigate('/user/home');
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '5px 35px 5px 35px',
                        }}
                    >
                        <Link
                            to="/login"
                            style={{
                                color: 'black',
                                fontSize: 25,
                                fontWeight: 'bold',
                            }}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/register"
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
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Enter your Email"
                                ></input>

                                <div className="password-field">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control mb-3"
                                        placeholder="Enter your Password"
                                    ></input>
                                    <i
                                        className={`bi bi-eye${showPassword ? '-slash' : ''
                                            } eye-icon`}
                                        onClick={handleTogglePassword}
                                    ></i>
                                </div>

                                <a href="/forgotPassword" className="btn btn-link text-primary">
                                    Forgot Password?
                                </a>

                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-danger w-100 mb-4"
                                >
                                    Sign in
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-muted mb-1">Don't have an account yet?</p>
                                <Link to="/register" className="btn btn-link text-primary">
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

export default Login;
