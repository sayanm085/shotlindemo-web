import axios from "axios";
import api from "@/api/config.api";

const ProductDetailsApi = async (product_id) => {
  try {
    const response = await axios.get(`${api}/v1/products/product-details/${product_id}`);
    return response.data.data; // Return the actual data
  } catch (error) {
    throw new Error("Failed to fetch product search results");
  }
};

export default ProductDetailsApi;