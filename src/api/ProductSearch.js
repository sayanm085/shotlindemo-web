import axios from "axios";
import api from "@/api/config.api";
const ProductSearch = async (method) => {
  try {
    const response = await axios.get(`${api}/v1/products/product-search/?${method}`);
    return response.data.data; // Return the actual data
  } catch (error) {
    throw new Error("Failed to fetch product search results");
  }
};

export default ProductSearch;
