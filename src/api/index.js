import config from "../config";

const api = (() => {

    async function get_products() {
        try {
            const response = await fetch(config.BASE_URL_PRODUCTS);
            const responseJson = await response.json();
            const { products } = responseJson;
            return products;
        } catch (error) {
            console.log(error.message)
            return []
        }
    }

    async function get_categories() {
        try {
            const response = await fetch(`${config.BASE_URL_PRODUCTS}/categories`);
            const responseJson = await response.json()
            return await responseJson;
        } catch (error) {
            console.log(error.message)
            return [];
        }
    }

    return {
        get_products,
        get_categories
    }
})()

export default api;