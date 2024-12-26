import React from "react";
import { Link } from "react-router-dom";

function HomeMegaMenu() {
  return (
    <div className="absolute right-0 bg-white shadow-lg border-t">
      <div className="mx-auto px-2 sm:px-2 lg:px-44 py-2">
        <div className="grid grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/electronics"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/clothing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/homegoods"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home Goods
                </Link>
              </li>
              <li>
                <Link to="books" className="text-gray-600 hover:text-gray-900">
                  Books
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2020/05/430ad3e4897a2ac3398a26ac24319631.ctaimg.webp"
                alt="Featured"
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h4 className="font-bold text-gray-900 mb-2">New Arrivals</h4>
              <p className="text-sm text-gray-600">
                Check out our latest collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMegaMenu;
