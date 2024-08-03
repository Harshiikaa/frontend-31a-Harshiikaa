import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleUserApi, updateUserApi } from '../../apis/Api';
import UserNavbar from '../../components/UserNavbar';
import blankProfile from '../../assets/images/blankProfile.png'


const UserEditProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [oldImage, setOldImage] = useState(null);

  useEffect(() => {
    getSingleUserApi(user._id).then((res) => {
      setFirstName(res.data.user.firstName);
      setLastName(res.data.user.lastName);
      setPhoneNumber(res.data.user.phoneNumber);
      setEmail(res.data.user.email);
      setUserImage(res.data.user.userImage);
      setOldImage(res.data.user.userImage);
    });
  }, [user._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    formData.append('previewImage', previewImage);
    formData.append('userImage', userImage);
    // formData.append('oldImage', oldImage);

    updateUserApi(user._id, formData)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setPreviewImage(URL.createObjectURL(userImage));
          navigate('/user/profile');
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error('Server Error');
      });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUserImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Set previewImage immediately
  };


  return (
    <div>
      <UserNavbar />
      <h1>User Edit Profile</h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
        <div className='d-flex m-4 gap-4'>
          <div className='user-image'>
            <label> Profile Picture</label>
            <input onChange={handleImageUpload} type="file" className="form-control mb-2" />
            {/* <h6>Old image</h6> */}
            {oldImage ? (
              <img src={oldImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
            ) : (
              <img src={blankProfile} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
            )}
            <hr />
            {previewImage && (
              <>
                <h6 className='mt-3'>New image</h6>
                <img src={previewImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
              </>
            )}
          </div>
          <form>
            <label>First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control mb-2"></input>
            <label>Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control mb-2" ></input>
            <label>Phone Number</label>
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control mb-2"></input>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" ></input>
            <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;
