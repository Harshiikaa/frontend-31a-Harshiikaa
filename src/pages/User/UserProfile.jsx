import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import '../User/UserProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteUserApi, getSingleUserApi, updateUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import blankProfile from '../../assets/images/blankProfile.png'


// ...

const UserProfile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.id);
  const id = user.id;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userImage, setUserImage] = useState(null);




  useEffect(() => {
    getSingleUserApi(user._id).then((res) => {
      console.log(res.data);
      setFirstName(res.data.user.firstName);
      setLastName(res.data.user.lastName);
      setPhoneNumber(res.data.user.phoneNumber);
      setEmail(res.data.user.email);
      setUserImage(res.data.user.userImage);

    });
  }, [user]);

  const handleDeleteUser = (id) => {
    const confirmDialog = window.confirm('Are you sure, you want to delete your account?')
    if (!confirmDialog) {
      return;
    }
    else {
      deleteUserApi(id).then((res) => {
        if (res.data.success == true) {
          window.location.reload()
          localStorage.clear();
          toast.success(res.data.success)
          navigate('/login')
        }
        else {
          toast.error(res.data.message)
        }

      })
    }
  }

  return (
    <div>
      <UserNavbar />
      <h1>Edit Profile</h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
        <div className='d-flex m-4 gap-4'>
          <div className=''>
            <form>
              <div className='image-side'>
                {/* Conditionally render the profile image or a placeholder image */}
                {userImage ? (
                  <img src={userImage} className='object-fit-cover rounded-3' height={200} width={200} alt='Profile' />
                ) : (
                  <img src={blankProfile} className='object-fit-cover rounded-3' height={200} width={200} alt='Placeholder' />
                )}
                <hr />
              </div>

              {/* Rest of the form */}
              <label>First Name</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control mb-2" />
              <label>Last Name</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control mb-2" />
              <label>Phone Number</label>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control mb-2" />
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" />
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Link to={`/user/profileEdit/${user._id}`} className='btn btn-success'>Edit</Link>
                <button onClick={() => handleDeleteUser(user._id)} className='btn btn-danger'>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;


// const UserProfile = () => {

//   // receive user details from local Storage
//   const user = JSON.parse(localStorage.getItem('user'))
//   console.log(user.id)

//   // make use state
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState("")
//   // make use state for image
//   // const [userImage, setUserImage] = useState(null)
//   const [previewImage, setPreviewImage] = useState(null)
//   // const [oldImage, setOldImage] = useState(null)



//   useEffect(() => {
//     // api call
//     getSingleUserApi(user._id).then((res) => {
//       console.log(res.data)
//       setFirstName(res.data.user.firstName)
//       setLastName(res.data.user.lastName)
//       setPhoneNumber(res.data.user.phoneNumber)
//       setEmail(res.data.user.email)
//       // setPassword(res.data.user.password)
//       // setUserImage(res.data.user.userImage)
//       // setOldImage(res.data.user.userImageURL)
//     })
//   }, [user])

//   // Function for image upload and preview
//   // const handleImageUpload = (event) => {
//   //   const file = event.target.files[0]
//   //   setUserImage(file)
//   //   setPreviewImage(URL.createObjectURL(file))
//   // }



//   return (
//     <div>
//       <UserNavbar />
//       <h1>Edit Profile </h1>

//       <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
//         <div className='d-flex m-4 gap-4'>
//           <div className=''>
//             <form >
//               <div className='image-side'>
//                 {/* <h6>Old image  Logo</h6> */}
//                 {/* <img className='object-fit-cover rounded-3' height={200} width={200} alt='' /> */}

//                 {/* <label>Business Logo</label>
//                 <input type="file" className="form-control mb-2" /> */}

//                 {/* <label htmlFor="fileInput" className="fileInputLabel">
//                   Upload new picture
//                 </label>
//                 <input
//                   type="file"
//                   id="fileInput"
//                   className="form-control mb-2 visually-hidden"
//                   accept=".jpg, .jpeg, .png"
//                   onChange={handleFileInputChange}
//                 /> */}

//                 <hr />

//                 {/* <div className='image-side' >
//                   <h6>Old image</h6>
//                   <img src={oldImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
//                   <hr />
//                   {
//                     previewImage && <>
//                       <h6 className='mt-3'>New image</h6>
//                       <img src={previewImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' /></>
//                   }
//                 </div> */}

//               </div>

//               <label>First Name</label>
//               <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control mb-2" ></input>
//               <label>Last Name</label>
//               <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control mb-2" ></input>
//               <label>Phone Number</label>
//               <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control mb-2" ></input>
//               <label>Email</label>
//               <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" ></input>
//               {/* <label>Password</label>
//               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mb-2" ></input> */}
//               {/* <label>User Image</label>
//               <input onChange={handleImageUpload} type="file" className="form-control mb-2" /> */}
//               <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                 <Link to={`/user/profileEdit/${user._id}`} className='btn btn-success'>Edit</Link>
//                 <button onClick={""} className='btn btn-danger'>Delete</button>
//               </div>

//               {/* <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Save</button> */}
//             </form>

//           </div>
//           {/* <div className='image-side' style={{ marginLeft: '20px' }}>
//             <h6>Old image</h6>
//             <img className='object-fit-cover rounded-3' height={200} width={200} alt='' />
//             <hr />
//             {
//               previewImage && <>
//                 <h6 className='mt-3'>New image</h6>
//                 <img className='object-fit-cover rounded-3' height={200} width={200} alt='' /></>
//             }
//           </div> */}
//         </div>
//       </div>

//     </div>
//   )

// }

// export default UserProfile
