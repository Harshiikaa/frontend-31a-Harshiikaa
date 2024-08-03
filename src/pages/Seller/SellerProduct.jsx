import React, { useEffect, useState } from 'react'
import { createProductApi, deleteProductApi, getAllProductsApi, getProductsBySellerID, getSingleProductApi } from '../../apis/Api'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import SellerNavbar from '../../components/SellerNavbar'


const SellerProduct = () => {
    const seller = JSON.parse(localStorage.getItem('seller'))
    console.log(seller._id)


    // make use state 
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    // make use state for image 
    const [productImage, setProductImage] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    const [products, setProducts] = useState([])
    // useEffect(() => {
    //     getAllProductsApi().then((res) => {
    //         setProducts(res.data.products)
    //     })
    // }, [])
    useEffect(() => {
        getProductsBySellerID(seller._id)
            .then((res) => {
                console.log("API Response:", res.data);
                setProducts(res.data.products);
            })
            .catch(err => {
                toast.error("Server Error")
                console.log(err.message)
            })
    }, [seller._id]);

    // Function for image upload and preview 
    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }

    // handle submit 
    const handleSumbit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)
        formData.append('sellerID', seller._id)
        // console.log(productName, productPrice, productCategory, productDescription, productImage)
        createProductApi(formData).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
            }
        }).catch(err => {
            toast.error("Server Error")
            console.log(err.message)
        })
    }

    const handleDelete = (id) => {
        const confirmDialog = window.confirm('Are you sure, you want to delete this product?')
        if (!confirmDialog) {
            return;
        }
        else {
            deleteProductApi(id).then((res) => {
                if (res.data.success == true) {
                    window.location.reload()
                    toast.success(res.data.success)
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
            <div className="m-4">
                <div className="d-flex justify-content-between">
                    <Link to="/seller/dashboard">
                        <button type="button" className="btn btn-primary btn-block btn-lg">Back</button>
                    </Link>
                    <h2>Seller Dashboard</h2>
                    {/* <button className="btn btn-danger">Add Product</button> */}

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create Product</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form >
                                        <label>Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the product name"></input>
                                        <label>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the product price"></input>
                                        <label>Product Category</label>
                                        <select onChange={(e) => setProductCategory(e.target.value)} className="form-control mb-2"  >
                                            <option value="Category">Category</option>
                                            <option value="Antique Jewelry">Antique Jewelry</option>
                                            <option value="Embroidery and Needle-work">Embroidery and Needle-work</option>
                                            <option value="Home decors">Home decors</option>
                                            <option value="Pottery and Ceramics">Pottery and Ceramics</option>
                                            <option value="Musical Instruments">Musical Instruments</option>
                                            <option value="Arts and Paintings">Arts and Paintings</option>
                                            <option value="Masks and Costume">Masks and Costume</option>
                                            <option value="Macrame and Knotting">Macrame and Knotting</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        <label>Product Description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} type="text" id="" rows="3" cols="3" className="form-control mb-2" placeholder="Enter the product description"></textarea>

                                        <label>Product Image</label>
                                        <input onChange={handleImageUpload} type="file" className="form-control mb-2" />

                                        {
                                            previewImage && <img src={previewImage} className='img-fluid rounded-3 object-fit-cover' alt='productImage'></img>
                                        }


                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSumbit} type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for showing table */}

                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.length > 0 ? (
                            products.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <img src={item.productImageURL} width={'40'} height={'40'} alt="" />
                                    </td>
                                    <td> {item.productName} </td>
                                    <td> NPR.{item.productPrice}</td>
                                    <td>{item.productCategory}</td>
                                    <td>{item.productDescription.slice(0, 10)}</td>
                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                            <Link to={`/seller/productEdit/${item._id}`} className='btn btn-success'>Edit</Link>
                                            <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No products available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )

}
export default SellerProduct