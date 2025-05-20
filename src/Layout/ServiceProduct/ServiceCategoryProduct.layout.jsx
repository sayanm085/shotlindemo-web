import React from "react";
import ProductList from "../../components/layout component/ProductList.component.jsx";

function ServiceCategoryProduct({ products = [] }) {
  // Get category name safely
  const productsCategory = products.length > 0 ? products[0].category : "Unknown Category";

  return (
    <section className="h-auto w-full py-5 flex relative z-50 flex-col items-center justify-center">
      <div id="center-product-box" className="w-full ds:w-[90%] h-full flex flex-col px-7">
        {/* Header Section */}
        <div className="w-full flex items-center gap-3 justify-between">
          <div className="py-5 ml-5 flex items-center gap-3">
            <h1 className="text-white text-lg">{productsCategory}</h1>
          </div>
          <div className="hidden md:block flex-grow h-[1px] bg-[#ffffff5c]"></div>
        </div>

        {/* Product List */}
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <div className="text-center text-gray-400 py-10">No products available.</div>
        )}
      </div>
    </section>
  );
}

export default ServiceCategoryProduct;
