import React, { useEffect, useState } from "react";
import "./Products.css";
import product_1 from "../../assets/product-1.png";
import product_2 from "../../assets/product-2.png";
import product_3 from "../../assets/product-3.png";
import product_4 from "../../assets/product-4.png"; // Mobile App Image
import { Link } from "react-scroll"; // Importing Link component for smooth scroll

const Product = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer to detect when products come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".product");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      img: product_1,
      name: "Busy Basic Edition",
      description:
        "Ideal for small businesses and startups with basic accounting needs. Includes one-time  Features: Multi-Company / Multi-Financial Year, Multiple Material Centers, Balance Sheet, Profitability Reports, Purchase & Sales Register, Multi Location Inventory.",
      priceSingle: "Rs. 9000 (Single User/Year)",
      priceMulti: "Rs. 22,021.00 (Multi User/Year)",
      modules: [
        "Multi-Company",
        "Balance Sheet",
        "Profitability Reports",
        "Purchase & Sales Register",
      ],
    },
    {
      img: product_2,
      name: "Busy Saffron (Standard Edition)",
      description:
        "Perfect for medium-sized businesses with inventory management. Includes one-time Features: IRD Tax Billing, MIS/Reports, Production & Job Work, VAT Reports for Nepal, WhatsApp message and email from busy, Serial-wise detail entry, Batch-wise detail entry.",
      priceSingle: "Rs. 12,332.00 (Single User/Year)",
      priceMulti: "Rs. 31,710.00 (Multi User/Year)",
      modules: [
        "IRD Tax Billing",
        "MIS/Reports",
        "Production & Job Work",
        "VAT Reports for Nepal",
      ],
    },
    {
      img: product_3,
      name: "Busy Emerald (Enterprise Edition)",
      description:
        "Advanced features for large businesses, including multi-branch management. Includes one-time Features: IRD Tax Billing, MIS/Reports, Production, Point of Sales (POS), HR and Payroll Module, Manufacturing Module.",
      priceSingle: "Rs. 17,617.00(Single User/Year)",
      priceMulti: "Rs. 44,041.00(MultiUser/Year)",
      modules: [
        "IRD Tax Billing",
        "Point of Sales",
        "HR and Payroll",
        "Manufacturing Module",
      ],
    },
    {
      img: product_4,
      name: "Busy Mobile App",
      description:
        "Access and manage business finances on the go with the mobile app. Features: Includes 100+ reports, access anytime, anywhere, and features like quotation, order, and invoice management. Share reports via WhatsApp, Email, or Message with one tap. Available for Android & iOS. Free mobile app for one year with all editions.",
      price: "Rs 5500 (Per Year)",
      modules: ["Mobile Access", "Reports", "Mobile Access for Android & iOS"],
      isMobileApp: true, // Flag to center the Mobile App product
    },
  ];

  return (
    <div className="products">
      {/* Loop over products */}
      {products.map((product, index) =>
        product.isMobileApp ? (
          <div
            className={`product mobile-app ${inView ? "in-view" : ""}`}
            key={index}
          >
            <img src={product.img} alt={product.name} />
            <div className="caption">
              <p className="product-name">{product.name}</p>
              <p className="description">{product.description}</p>
              {product.price && (
                <div className="price-info">
                  <p className="price">{product.price}</p>
                </div>
              )}
              <div className="modules">
                <p className="module-title">Modules:</p>
                {product.modules.map((module, idx) => (
                  <p key={idx}>{module}</p>
                ))}
              </div>

              {/* Free Mobile App text */}
              <div className="extra-info">
                <p className="vat-info">Implementation & VAT (13%) Extra</p>
              </div>

              {/* Buttons */}
              <div className="product-buttons">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="get-demo-button"
                >
                  Get a Demo
                </Link>
                <a
                  href="https://wa.me/9779858029944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-details-button"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Single User Card */}
            <div
              className={`product single-user ${inView ? "in-view" : ""}`}
              key={`${index}-single`}
            >
              <img src={product.img} alt={`${product.name} - Single User`} />
              <div className="caption">
                <p className="product-name">{product.name} - Single User</p>
                <p className="description">{product.description}</p>
                <div className="price-info">
                  <p className="price">{product.priceSingle}</p>
                </div>
                <div className="modules">
                  <p className="module-title">Modules:</p>
                  {product.modules.map((module, idx) => (
                    <p key={idx}>{module}</p>
                  ))}
                </div>

                {/* Extra info text */}
                <div className="extra-info">
                  <p className="vat-info">
                    {" "}
                    Free Implementation & VAT (13%) Extra
                  </p>
                  <p className="vat-info">Free Mobile app for a year</p>
                </div>

                {/* Buttons */}
                <div className="product-buttons">
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="get-demo-button"
                  >
                    Get a Demo
                  </Link>
                  <a
                    href="https://wa.me/9779858029944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-details-button"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>

            {/* Multi User Card */}
            <div
              className={`product multi-user ${inView ? "in-view" : ""}`}
              key={`${index}-multi`}
            >
              <img src={product.img} alt={`${product.name} - Multi User`} />
              <div className="caption">
                <p className="product-name">{product.name} - Multi User</p>
                <p className="description">{product.description}</p>
                <div className="price-info">
                  <p className="price">{product.priceMulti}</p>
                </div>
                <div className="modules">
                  <p className="module-title">Modules:</p>
                  {product.modules.map((module, idx) => (
                    <p key={idx}>{module}</p>
                  ))}
                </div>

                {/* Extra info text */}
                <div className="extra-info">
                  <p className="vat-info">
                    {" "}
                    Free Implementation & VAT (13%) Extra
                  </p>
                  <p className="vat-info">Free Mobile app for a year</p>
                </div>

                {/* Buttons */}
                <div className="product-buttons">
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="get-demo-button"
                  >
                    Get a Demo
                  </Link>
                  <a
                    href="https://wa.me/9779858029944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-details-button"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Product;
