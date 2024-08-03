import { useEffect, useState } from "react"
import { deleteSellerApi, getSingleSellerApi } from "../../apis/Api"
import SellerNavbar from "../../components/SellerNavbar"
import { Link, useNavigate } from "react-router-dom"
import blankProfile from '../../assets/images/blankProfile.png'
import { toast } from "react-toastify"

const SellerProfile = () => {
    const seller = JSON.parse(localStorage.getItem('seller'))
    console.log(seller._id)
    const id = seller.id;


    const navigate = useNavigate();

    // make use state 
    const [businessName, setBusinessName] = useState('')
    const [businessPhone, setBusinessPhone] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')
    const [email, setEmail] = useState('')
    const [sellerImage, setSellerImage] = useState(null);


    useEffect(() => {
        getSingleSellerApi(seller._id).then((res) => {
            console.log(res.data)
            setBusinessName(res.data.seller.businessName)
            setBusinessPhone(res.data.seller.businessPhone)
            setBusinessAddress(res.data.seller.businessAddress)
            setEmail(res.data.seller.email)
            setSellerImage(res.data.seller.sellerImage);


        })
    }, [seller])


    const handleDeleteSeller = (id) => {
        const confirmDialog = window.confirm('Are you sure, you want to delete your account?')
        if (!confirmDialog) {
            return;
        } else {
            deleteSellerApi(id).then((res) => {
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
        <>
            <SellerNavbar />
            <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
                <div className='d-flex m-4 gap-4'>
                    <Link to="/seller/dashboard">
                        <button type="button" className="btn btn-primary btn-block btn-lg">Back</button>
                    </Link>
                    <div className=''>
                        <form >
                            <div className='image-side'>
                                {/* Conditionally render the profile image or a placeholder image */}
                                {sellerImage ? (
                                    <img src={sellerImage} className='object-fit-cover rounded-3' height={200} width={200} alt='Profile' />
                                ) : (
                                    <img src={blankProfile} className='object-fit-cover rounded-3' height={200} width={200} alt='Placeholder' />
                                )}
                                <hr />
                            </div>
                            <label>Business Name</label>
                            <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business name"></input>
                            <label>Business Phone Number</label>
                            <input value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business phone number"></input>
                            <label>Business Address</label>
                            <input value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business address"></input>
                            <label>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business email"></input>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Link to={`/seller/profileEdit/${seller._id}`} className='btn btn-success'>Edit</Link>
                                <button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-danger'>Delete</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div className="modal-body">

                {/* </form> */}
            </div>
        </>
    )
}

export default SellerProfile