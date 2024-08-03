import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getSingleSellerApi, updateSellerApi } from '../../apis/Api'
import SellerNavbar from '../../components/SellerNavbar'
import blankProfile from '../../assets/images/blankProfile.png'

const SellerEditProfile = () => {
    // receive product id from URL
    const seller = JSON.parse(localStorage.getItem('seller'))
    console.log(seller._id)
    const navigate = useNavigate()

    // make use state 
    const [businessName, setBusinessName] = useState('')
    const [businessPhone, setBusinessPhone] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')
    const [email, setEmail] = useState('')
    const [sellerImage, setSellerImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [oldImage, setOldImage] = useState(null);

    // make use state for image 
    // const [businessLogo, setBusinessLogo] = useState(null)
    // const [previewLogo, setPreviewLogo] = useState(null)
    useEffect(() => {
        getSingleSellerApi(seller._id).then((res) => {
            // console.log(res.data)
            setBusinessName(res.data.seller.businessName)
            setBusinessPhone(res.data.seller.businessPhone)
            setBusinessAddress(res.data.seller.businessAddress)
            setEmail(res.data.seller.email)
            setSellerImage(res.data.seller.sellerImage);
            setOldImage(res.data.seller.sellerImage);
        })
    }, [seller._id])

    // make function for the update button
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(businessName, businessPhone, businessAddress, email)

        // make a form data 
        const formData = new FormData();
        formData.append('businessName', businessName)
        formData.append('businessPhone', businessPhone)
        formData.append('businessAddress', businessAddress)
        formData.append('email', email)
        formData.append('previewImage', previewImage)
        formData.append('sellerImage', sellerImage)

        // making api call 
        updateSellerApi(seller._id, formData).then((res) => {
            if (res.data.success == true) {
                toast.success(res.data.message)
                setPreviewImage(URL.createObjectURL(sellerImage));

                navigate('/seller/profile')
            } else {
                toast.error(res.data.message)
            }

        }).catch(err => {
            toast.error("Server Error")
        })

    }
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSellerImage(file);
        setPreviewImage(URL.createObjectURL(file)); // Set previewImage immediately
    };


    return (
        <div>
            <SellerNavbar />
            <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
                <div className='d-flex m-4 gap-4'>
                    <div className='seller-image'>
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
                    <form >
                        <label>Business Name</label>
                        <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business name"></input>
                        <label>Business Phone Number</label>
                        <input value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business phone number"></input>
                        <label>Business Address</label>
                        <input value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business address"></input>
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business email"></input>
                        <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Update Profile</button>

                    </form>


                </div>
            </div>


        </div>
    )
}

export default SellerEditProfile
