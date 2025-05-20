import React, { memo } from "react";
import ProductList from "../../components/layout component/ProductList.component.jsx";

const AllProduct = ({ products = [] }) => {


  // Group products by their categories dynamically
  const categorizedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <section className="h-auto w-full py-5 flex flex-col items-center justify-center relative z-50">
      <section id="center-product-box" className="w-full ds:w-[90%] h-full flex flex-col px-7">
        {Object.entries(categorizedProducts).map(([category, items]) => {
          // Show only the latest 8 products for each category
          const latestProducts = items.slice(-8); 

          return (
            <div key={category} className="w-full">
              {/* Header */}
              <div className="w-full flex items-center gap-3 justify-between">
                <div className="py-5 ml-5 min-w-[240px] flex items-center gap-3">
                  <h1 className="text-white text-lg w-fit">{category}</h1>
                  <a href={`services/${category}`} className="text-[#9e9e9e] hover:text-white w-fit">
                    Explore all <i className="fa-solid fa-chevron-right text-sm"></i>
                  </a>
                </div>
                <div className="hidden md:block flex-grow h-[1px] bg-[#ffffff5c]"></div>
              </div>

              {/* Product List */}
              <ProductList title={category} products={latestProducts} />
            </div>
          );
        })}

        {/* Show "No products found" if no products exist */}
        {Object.keys(categorizedProducts).length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-white text-2xl">No products found</h1>
          </div>
        )}
      </section>
    </section>
  );
};

export default memo(AllProduct);
