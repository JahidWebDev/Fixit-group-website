import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import product1 from "../../assets/Dr-Fixit-Brand-LW+-101-1-Litre.png";
import product2 from "../../assets/Dr-Fixit-Brand-Plaster-Master.png";
import product3 from "../../assets/Dr-Fixit-Brand-LW-101-30-Litre.png";
import product5 from "../../assets/Dr-Fixit-Brand-5400-Interior-Wall-Selaer.png";
import product8 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-18-Litre 02.png";
import product9 from "../../assets/Fevilock-500-ml.png";
import product10 from "../../assets/Dr-Fixit-Brand-5100-Exterior-Sealer-18-Litre.png";
import product11 from "../../assets/Rust-Remover-01-Litre.png";
import product12 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-1-Litre.png";

export const products = [
  {
    id: 1,
    title: "Dr. Fixit LW+ 101 (1 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "1 Litre",
    subtitle: "Liquid Waterproofing Compound",
    description:
      "Enhances waterproofing in concrete and mortar, improving workability and reducing shrinkage. Ideal for cement concrete and plaster to enhance cohesiveness, reduce cracks, and improve durability.",
    image: product1,
  },
  {
    id: 2,
    title: "Dr. Fixit Plaster Master",
    brand: "Dr. Fixit",
    category: "Surface Protection",
    quantity: "20 Kg",
    subtitle: "Durable Surface Protection Compound",
    description:
      "Provides excellent bonding between old and new concrete surfaces while increasing durability. Ensures stronger adhesion and reduced cracking over time.",
    image: product12,
  },
  {
    id: 3,
    title: "Dr. Fixit LW+ 101 (30 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "30 Litre",
    subtitle: "Large Volume Waterproofing Additive",
    description:
      "Ideal for concrete and plaster to ensure long-term protection and durability.",
    image: product1,
  },
  {
    id: 4,
    title: "Dr. Fixit 5400 Interior Wall Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    subtitle: "Interior Wall Sealer",
    description:
      "Protects walls from dampness and efflorescence, providing a smooth surface for painting.",
    image: product12,
  },
  {
    id: 5,
    title: "Fevilock 500 ml",
    brand: "Fevilock",
    category: "Adhesive",
    quantity: "500 ml",
    subtitle: "Instant Adhesive",
    description:
      "High-strength bonding adhesive suitable for wood, metal, ceramics, and plastics.",
    image: product12,
  },
  {
    id: 6,
    title: "Dr. Fixit 5100 Exterior Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    subtitle: "Exterior Wall Sealer",
    description:
      "Long-lasting exterior wall protection from moisture and UV damage.",
    image: product10,
  },
  {
    id: 7,
    title: "Rust Remover (1 Litre)",
    brand: "Fixit",
    category: "Cleaning",
    quantity: "1 Litre",
    subtitle: "Metal Surface Cleaner",
    description:
      "Removes rust from metal surfaces effectively without damaging the base material.",
    image: product8,
  },
  {
    id: 8,
    title: "Dr. Fixit 302 Super Latex (1 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "1 Litre",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Improves adhesion between old and new concrete surfaces and enhances waterproofing.",
    image: product3,
  },
  {
    id: 9,
    title: "Dr. Fixit 302 Super Latex (18 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "18 Litre",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Ideal for large-scale bonding and waterproofing applications in construction.",
    image: product5,
  },
  {
    id: 10,
    title: "Dr. Fixit Extra Product 1",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "5 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 1.",
    image: product2,
  },
  {
    id: 11,
    title: "Dr. Fixit Extra Product 2",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "10 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 2.",
    image: product10,
  },
  {
    id: 12,
    title: "Dr. Fixit Extra Product 3",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "15 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 3.",
    image: product11,
  },
  {
    id: 12,
    title: "Dr. Fixit Extra Product 3",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "15 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 3.",
    image: product9,
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  const initialIndex = id
    ? Math.max(0, products.findIndex((item) => item.id === parseInt(id)))
    : 0;

  const [index, setIndex] = useState(initialIndex);
  const p = products[index];

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);

  return (


    







    
    <section className="w-full  z-50">




      
      <div className="max-w-[1500px] mx-auto py-16 px-6 md:px-12">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="flex flex-col items-center">
            <div className="border h-[400px] w-[350px] border-gray-200 rounded-2xl shadow-sm p-4 flex items-center justify-center bg-white">
              <img
                src={p.image}
                alt={p.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="mt-8">
              <Link
                to="/find-dealer"
                className="bg-[#f6b400] hover:bg-[#e0a200] text-black font-semibold px-8 py-3 rounded-md shadow-md transition"
              >
                Find a Dealer
              </Link>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {p.title}
            </h2>
            <p>
              <span className="font-semibold">Brand:</span> {p.brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {p.category}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {p.quantity}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              <span className="text-green-600 font-medium">In Stock</span>
            </p>

            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {p.subtitle}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {products.map((prod, i) => (
            <button
              key={prod.id}
              onClick={() => setIndex(i)}
              className={`border rounded-xl p-2 transition-all ${
                index === i
                  ? "border-[#f6b400] bg-[#fff8e1] scale-105"
                  : "border-gray-200 bg-white hover:border-[#f6b400]"
              }`}
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-[70px] h-auto object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
