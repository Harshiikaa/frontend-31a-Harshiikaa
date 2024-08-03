import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendResetPasswordMailApi } from "../../apis/Api";
import backgroundImage from '../../assets/images/background.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = {
        password: password,
      };
      const response = await sendResetPasswordMailApi(token, data);

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
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
          right: "60px",
          padding: "40px",
        }}>
          <div className='m-3'>
            <div className='signup-with-div' style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
            }}>Reset Password Form</div>
          </div>
          <div className='m-3'>
            <div className='signup-with-div' style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'regular',
            }}>
              Set your new password here
            </div>
          </div>
          <div>
            <div style={{ padding: '10px 5px' }}>
              <div className='field-group'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className='form-control mb-2'
                  placeholder='Password'
                />
               
              </div>
              <div className='field-group'>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPassword ? "text" : "password"}
                  className='form-control mb-2'
                  placeholder='Confirm Password'
                />
               
              </div>
              <button
                onClick={handleSubmit}
                className='btn btn-danger w-100 mb-2'
              >
                Submit
              </button>
              <div className="text-center">
                <p className="text-muted mb-1">Go back to</p>
                <a href="/login" className="btn btn-link text-primary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
