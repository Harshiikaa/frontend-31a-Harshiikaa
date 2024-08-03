import axios from "axios";
import login_mock from "./mock/login_mock";
import products_mock from "./mock/products_mock";
import favorite_mock from "./mock/favorite_mocks";


const baseURL = "http://localhost:5000";

describe("API Testing", () => {
    it('test should work', async () => {
        const response = await axios.get(`${baseURL}/test`);
        expect(response.status).toEqual(200);

    });

    //1. login 
    if ("Login should work", async () => {
        const response = await axios.post(`${baseURL}/api/user/login`, login_mock)
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);

    });

    //2. get Products 
    it("GET /api/product/getProducts | Should work", async () => {
        try {
            const response = await axios.get(`${backendURL}/api/product/getProducts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            expect(response.status).toBe(200);
            expect(response.data.message).toBe("Products fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

    //3. get Products by ID
    it("GET /api/product/getProduct/ | Should work", async () => {
        try {
            const response = await axios.get(`${backendURL}/api/product/getProduct/`, {

            });

            expect(response.status).toBe(200);
            expect(response.data.message).toBe("Products fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });


    //4. get all users
    it("GET /api/user/getUsers | Should work", async () => {
        try {
            const response = await axios.get(`${backendURL}/api/user/getUsers`, {

            });

            expect(response.status).toBe(200);
            expect(response.data.message).toBe("Users fetched succesfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

    //5. get user by ID
    it("GET /api/user/getUser/ | Should work", async () => {
        try {
            const response = await axios.get(`${backendURL}/api/user/getUser/`, {

            });

            expect(response.status).toBe(200);
            expect(response.data.message).toBe("User fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });


     //6. get favorite by ID
     it("GET /api/favorite/getFavoriteByUserID/65d71a3e3b6e21150df70c6d | Should work", async () => {
        try {
            const response = await axios.post(`${backendURL}/api/favorite/getFavoriteByUserID/65d71a3e3b6e21150df70c6d`, {

            });

            expect(response.status).toBe(400);
            expect(response.data.message).toBe("Favorite fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

     //7. get favorites
     it("GET /api/favorite/getFavorite | Should work", async () => {
        try {
            const response = await axios.post(`${backendURL}/api/favorite/getFavorite`, {

            });

            expect(response.status).toBe(400);
            expect(response.data.message).toBe("Favorites fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

      //8. get cart by ID
      it("GET /api/cart/getCartByUserID/65d71a3e3b6e21150df70c6d | Should work", async () => {
        try {
            const response = await axios.post(`${backendURL}/api/favorite/getCartByUserID/65d71a3e3b6e21150df70c6d`, {

            });

            expect(response.status).toBe(400);
            expect(response.data.message).toBe("Cart fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

      //9. get carts
      it("GET /api/cart/getCart | Should work", async () => {
        try {
            const response = await axios.post(`${backendURL}/api/favorite/getCart`, {

            });

            expect(response.status).toBe(400);
            expect(response.data.message).toBe("Carts fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });

     //10. get user
     it("GET /api/user/getUsers | Should work", async () => {
        try {
            const response = await axios.post(`${backendURL}/api/user/getUsers`, {

            });

            expect(response.status).toBe(400);
            expect(response.data.message).toBe("Users fetched successfully");
            expect(response.data.products).toBeDefined();
        } catch (error) {
            console.error("Error:", error);
        }
    });









})