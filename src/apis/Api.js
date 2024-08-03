import axios from "axios";
const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "multipart/form-data",
    }
})

const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }

}
export const testApi = () => Api.get("/test")
export const searchApi = (searchQuery) => Api.get(`/api/product/search/${searchQuery}`, config);

// API export for users
export const createUserApi = (data) => Api.post('/api/user/create', data)
export const loginUserApi = (data) => Api.post('/api/user/login', data)
export const getAllUsersApi = () => Api.get('/api/user/getUsers')
export const getSingleUserApi = (id) => Api.get(`/api/user/getUser/${id}`)
export const updateUserApi = (id, formData) => Api.put(`/api/user/updateUser/${id}`, formData, config) // formdata is used to send image to the server
export const deleteUserApi = (id) => Api.delete(`/api/user/deleteUser/${id}`, config)
export const sendResetPasswordMailApi = (token, data) => Api.post(`/api/user/resetPassword/${token}`, data, config)
export const forgetPasswordApi = (data) => Api.post(`/api/user/forgetPassword`, data)


// API export for sellers
export const createSellerApi = (data) => Api.post('/api/seller/create', data)
export const loginSellerApi = (data) => Api.post('/api/seller/login', data)
export const getAllSellersApi = () => Api.get('/api/seller/getSellers')
export const getSingleSellerApi = (id) => Api.get(`/api/seller/getSeller/${id}`)
export const updateSellerApi = (id, formData) => Api.put(`/api/seller/updateSeller/${id}`, formData, config)
export const deleteSellerApi = (id) => Api.delete(`/api/seller/deleteSeller/${id}`, config)


// API export for products
export const createProductApi = (data) => Api.post('/api/product/createProduct', data, config)
export const getAllProductsApi = () => Api.get('/api/product/getProducts')
export const getSingleProductApi = (id) => Api.get(`/api/product/getProduct/${id}`)
export const getProductsBySellerID = (id) => Api.get(`/api/product/getProductsBySellerApi/${id}`)
export const getProductsByAntiqueJewelryApi = () => Api.get('/api/product/getProductsByAntiqueJewelry/category')
export const getProductsByEmbroideryandNeedleworkApi = () => Api.get('/api/product/getProductsByEmbroideryandNeedlework/category1')
export const getProductsByHomedecorsApi = () => Api.get('/api/product/getProductsByHomedecors/category2')
export const getProductsByPotteryandCeramicsApi = () => Api.get('/api/product/getProductsByPotteryandCeramics/category3')
export const getProductsByMusicalInstrumentsApi = () => Api.get('/api/product/getProductsByMusicalInstruments/category4')
export const getProductsByArtsandPaintingsApi = () => Api.get('/api/product/getProductsByArtsandPaintings/category5')
export const getProductsByMasksandCostumeApi = () => Api.get('/api/product/getProductsByMasksandCostume/category6')
export const getProductsByMacrameandKnottingApi = () => Api.get('/api/product/getProductsByMacrameandKnotting/category7')
export const getProductsByOthersApi = () => Api.get('/api/product/getProductsByOthers/category8')
export const updateProductApi = (id, formData) => Api.put(`/api/product/updateProduct/${id}`, formData, config)
export const deleteProductApi = (id) => Api.delete(`/api/product/deleteProduct/${id}`, config)

// API export for favorites
export const createFavoriteApi = (data) => Api.post('/api/favorite/createFavorite', data, config)
export const getFavoritesByUserIDApi = (id) => Api.get(`/api/favorite/getFavoriteByUserID/${id}`, config)
export const removeFavoritesApi = (id) => Api.delete(`/api/favorite/removeFavorite/${id}`, config)

// API export for cart
export const addToCartApi = (data) => Api.post('/api/cart/addToCart', data, config)
export const getCartByUserIDApi = (id) => Api.get(`/api/cart/getCartByUserID/${id}`, config)
export const updateCartApi = (id, formData) => Api.put(`/api/cart/updateCart/${id}`, formData, config)
export const removeFromCartApi = (id) => Api.delete(`/api/cart/removeFromCart/${id}`, config)

// API export for  reviews
export const createReviewApi = (data) => Api.post('/api/review/createReview', data, config)
export const getReviewsBySellerIDApi = (id) => Api.get(`/api/review/getReviewsBySellerID/${id}`, config)
export const getReviewsByUserIDApi = (id) => Api.get(`/api/review/getReviewsByUserID/${id}`, config)
export const removeReviewApi = (id) => Api.delete(`/api/review/removeReview/${id}`, config)

// API export for  order
export const createOrderApi = (data) => Api.post('/api/order/createOrder', data, config)
export const getOrderByUserID = (id) => Api.get(`/api/order/getOrderByUserID/${id}`, config)

// API export for  order
export const createRatingApi = (data) => Api.post('/api/rating/createRating', data, config)
export const updateRatingApi = (id) => Api.get(`/api/rating/updateRating/${id}`, config)
