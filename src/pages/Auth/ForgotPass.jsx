import { toast } from 'react-toastify'

import React, { useState } from 'react'
import backgroundImage from '../../assets/images/background.png'
import { forgetPasswordApi } from '../../apis/Api'
import { useNavigate } from 'react-router-dom'


const ForgotPass = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await forgetPasswordApi({ email });
            console.log(response.data); // Handle the response as needed
            // Check the response for success or failure
            if (response.data.success == true) {
                // Show success message or navigate to another page
                toast.success(response.data.message);
                // You can also navigate to the login page or another page
                navigate('/login');
            } else {
                // Show an error message
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            // Handle error, show an error message, etc.
        }
    };

    return (
        <>
            <div className='image-Container' style={{
                width: "1150px",
                height: "500px",

                backgroundImage: `URL(${backgroundImage})`,
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>

                <div className='register-Box' style={{
                    width: "370px",
                    height: "450px",
                    backgroundColor: "white",
                    borderRadius: "40px",
                    position: "absolute",
                    // top: "20%",
                    right: "60px",
                    padding: "40px",
                }}>
                    <div className='m-3'>
                        <div className='signup-with-div' style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>Forgot Password?</div>
                    </div>

                    <div className='m-3'>
                        <div className='signup-with-div' style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'regular',
                        }}>
                            Enter your email address here, we will send a link to reset your password
                        </div>
                    </div>

                    <div>
                        <div style={{ padding: '10px 5px' }}>
                            <div className='field-group'>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}

                                    className='form-control mb-2'
                                    placeholder='Email'
                                />
                            </div>
                            <button
                                onClick={handleSubmit}

                                className='btn btn-danger w-100 mb-2'
                            >
                                Submit
                            </button>

                            <div class="text-center">
                                <p class="text-muted mb-1">Go back to</p>
                                <a href="/login" class="btn btn-link text-primary">
                                    Login
                                </a>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass

