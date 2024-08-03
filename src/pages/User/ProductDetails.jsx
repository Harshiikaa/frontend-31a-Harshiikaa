import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCartApi, createFavoriteApi, createRatingApi, createReviewApi, getReviewsByProductIDApi, getReviewsByUserIDApi, getSingleProductApi, removeReviewApi, updateRatingApi } from '../../apis/Api';
import UserNavbar from '../../components/UserNavbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
import StarIcon from '@mui/icons-material/Star';


const ProductDetails = () => {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    // const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [product, setProduct] = useState({
        productName: '',
        productPrice: '',
        productCategory: '',
        productDescription: '',
        quantity: 1,
        productImageURL: null,
        seller: { businessName: '' },
    });



    useEffect(() => {
        getSingleProductApi(id).then((res) => {
            const seller = res.data.product.sellerID;
            setProduct({
                productName: res.data.product.productName,
                productPrice: res.data.product.productPrice,
                productCategory: res.data.product.productCategory,
                productDescription: res.data.product.productDescription,
                quantity: res.data.product.quantity,
                productImageURL: res.data.product.productImageURL,
                seller: {
                    businessName: seller ? seller.businessName : '',
                    sellerID: seller ? seller.sellerID : '',

                },
            });
            setReview(res.data.product.review);

        });

    }, [id]);


    // useEffect(() => {
    //     getReviewsByUserIDApi(user._id)
    //         .then((res) => {
    //             console.log("API Response:", res.data);
    //             setReview(res.data.review);
    //         })
    //         .catch(err => {
    //             toast.error("Server Error")
    //             console.log(err.message)
    //         })
    // }, [id]);

    // const handleReviewSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('userID', user._id);
    //     formData.append('productID', id);
    //     formData.append('review', review.comment);
    //     formData.append('sellerID', '65b39ac07ef9089d676500d9');
    //     createReviewApi(formData)
    //         .then((res) => {
    //             if (res.data.success === false) {
    //                 toast.error(res.data.message);
    //             } else {
    //                 toast.success(res.data.message);
    //                 // setReviews([...reviews, newReview]);
    //                 // setNewReview({ rating: 0, comment: '' });
    //             }
    //         })
    //         .catch((err) => {
    //             toast.error('Server Error');
    //             console.log(err.message);
    //         });
    // };

    // const handleDelete = (id) => {
    //     const confirmDialog = window.confirm('Are you sure, you want to delete this review?')
    //     if (!confirmDialog) {
    //         return;
    //     }
    //     else {
    //         removeReviewApi(id).then((res) => {
    //             if (res.data.success == true) {
    //                 window.location.reload()
    //                 toast.success(res.data.success)
    //             }
    //             else {
    //                 toast.error(res.data.message)
    //             }

    //         })
    //     }
    // }




    const handleFavoriteButton = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userID', user._id);
        formData.append('productID', id);
        const createdAt = new Date().toISOString();
        formData.append('createdAt', createdAt);
        createFavoriteApi(formData).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
            }
        }).catch(err => {
            toast.error("Server Error");
            console.log(err.message);
        });
    };

    const handleCartButton = (e) => {
        e.preventDefault();
        setProduct({ ...product, quantity: 1 });
        const formData = new FormData();
        formData.append('userID', user._id);
        formData.append('productID', id);
        formData.append('productPrice', product.productPrice);
        formData.append('quantity', product.quantity);

        addToCartApi(formData).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
            }
        }).catch(err => {
            toast.error("Server Error");
            console.log(err.message);
        });
    };



    return (
        <div>
            <UserNavbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.productImageURL} alt={product.productName} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.productName}</h2>
                        <p>Category: {product.productCategory}</p>
                        <p>Description: {product.productDescription}</p>
                        <p>Price: NPR.{product.productPrice}</p>
                        <p>Seller: {product.seller.businessName}</p>
                        <div className="d-flex gap-3">
                            <button onClick={handleFavoriteButton} className="btn btn-success">
                                Add to Favorites
                                <FavoriteIcon style={{ fontSize: 24, marginLeft: '5px' }} />
                            </button>
                            <button onClick={handleCartButton} className="btn btn-secondary">
                                Add to Cart
                                <ShoppingCartIcon style={{ fontSize: 24, marginLeft: '5px' }} />
                            </button>
                        </div>



                        {/* Reviews Section */}
                        {/* <div className="mt-4">
                            <table className="table mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Reviews</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {review && review.length > 0 ? (
                                        // Assuming reviews[0].review is an array of reviews
                                        Array.isArray(review[0].review) ? (
                                            review[0].review.map((item) => (
                                                <tr key={item._id}>
                                                    <td>{item.review}</td>
                                                    <td>
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                            <button className='btn btn-danger'>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            // Assuming reviews[0].review is a single review object
                                            <tr key={review[0]._id}>
                                                <td>{review[0].review}</td>
                                                <td>
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <button onClick={""} className='btn btn-danger'>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    ) : (
                                        <tr>
                                            <td colSpan="2">No reviews available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <form onSubmit={handleReviewSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Your Review:</label>
                                    <textarea
                                        name="comment"
                                        value={review}  // Update this line
                                        onChange={(e) => setReview(e.target.value)}  // Update this line
                                        className="form-control"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit Review</button>
                            </form>

                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
