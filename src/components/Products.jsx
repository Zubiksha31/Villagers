import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShare, faCrown, faGem } from "@fortawesome/free-solid-svg-icons";

// Import product images
import Bowl from "../assets/Bowl1.jpg";
import ComboPack from "../assets/WineCup.jpg";
import Icecreambowlround from "../assets/IceCreamBowlRound-.jpg";
import Roundbowlpolished from "../assets/RoundBowlPolished.jpg";
import Rawpenstand from "../assets/RawPenStand.jpg";
import Roundbowlsetpolished from "../assets/RoundBowlSetPolished.jpg";
import Icecreamovalcups from "../assets/IceCreamOvalCups.jpg";
import Ovalpolishedbowl from "../assets/OvalPolishedBowl.jpg";
import Snackbowlwithscoop from "../assets/SnackBowlwithScoop.jpg";
import OvalGlossybowlset from "../assets/OvalGlossyBowlSet.jpg";
import Laddle from "../assets/Laddle.jpg";
import Miniteacup from "../assets/MiniTeaCup.jpg";
import DesertBowlWithScoop from "../assets/DesertBowlWithScoop.jpg";
import Rawshellteacup from "../assets/Rawshellteacup.jpg";
import Rawshellround from "../assets/Rawshellround.jpg";
import Rawshelloval from "../assets/RawShellOval.jpg";
import Matfinishjumbobowl from "../assets/Matfinishjumbobowl.jpg";

const products = [
  { id: 1, title: "Ice Cream Oval Cup", price: 18, category: "Kitchen & Dining", img: Bowl },
  { id: 2, title: "Combo Pack (Wine Cup, Round Dessert Cup, Oval Bowl, Pen Stand)", 
    price: 499, category: "Kitchen & Dining", img: ComboPack },
  { id: 3, title: "Ice Cream Bowl Round", price: 25, category: "Kitchen & Dining", img: Icecreambowlround },
  { id: 4, title: "Round Bowl Polished", price: 70, category: "Kitchen & Dining", img: Roundbowlpolished },
  { id: 5, title: "Raw Pen Stand", price: 90, category: "Office & Stationery", img: Rawpenstand },
  { id: 6, title: "Round Bowl Set Polished", price: 130, category: "Kitchen & Dining", img: Roundbowlsetpolished },
  { id: 7, title: "Ice Cream Oval Cups (Pack of 10)", price: 150, category: "Kitchen & Dining", img: Icecreamovalcups },
  { id: 8, title: "Oval Polished Bowl", price: 25, category: "Kitchen & Dining", img: Ovalpolishedbowl },
  { id: 9, title: "Snack Bowl With Scoop", price: 150, category: "Kitchen & Dining", img: Snackbowlwithscoop },
  { id: 10, title: "Oval Glossy Bowl Set", price: 45, category: "Kitchen & Dining", img: OvalGlossybowlset },
  { id: 11, title: "Laddle", price: 99, category: "Kitchen & Dining", img: Laddle },
  { id: 12, title: "Mini Tea Cup (Pack of 4)", price: 299, category: "Kitchen & Dining", img: Miniteacup },
  { id: 13, title: "Dessert Bowl With Scoop", price: 150, category: "Kitchen & Dining", img: DesertBowlWithScoop },
  { id: 14, title: "Raw Shell Tea Cup", price: 20, category: "Kitchen & Dining", img: Rawshellteacup },
  { id: 15, title: "Raw Shell Round", price: 15, category: "Kitchen & Dining", img: Rawshellround },
  { id: 16, title: "Raw Shell Oval", price: 10, category: "Kitchen & Dining", img: Rawshelloval },
  { id: 17, title: "Mat Finish Jumbo Bowl", price: 70, category: "Kitchen & Dining", img: Matfinishjumbobowl }
];

const categories = ["All", ...new Set(products.map(p => p.category))];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuy = (product) => {
    const productUrl = `${window.location.origin}/materials/${product.id}`;
    const message = `Hello! I'm interested in buying:\n\n*${product.title}*\nPrice: ₹${product.price}\n\nProduct Link: ${productUrl}`;
    window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShare = (product) => {
    const productUrl = `${window.location.origin}/materials/${product.id}`;
    const message = `🌿 Check out this exquisite eco-friendly product from Villagers Global!\n\n*${product.title}*\nPrice: ₹${product.price}\n\nView product: ${productUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-32 px-4 sm:px-6 pb-20">
      {/* Elegant Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent transform -skew-y-1"></div>
        <h1 className="text-5xl font-bold text-emerald-800 mb-4 relative">
          <FontAwesomeIcon icon={faCrown} className="text-emerald-600 mr-4" />
          Villagers Collection
          <FontAwesomeIcon icon={faCrown} className="text-emerald-600 ml-4" />
        </h1>
        <p className="text-lg text-emerald-700 font-light">Exquisite Handcrafted Eco-Friendly Items</p>
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-emerald-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Discover our collection..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 text-emerald-900 placeholder-emerald-600 font-medium transition-all"
              />
              <FontAwesomeIcon icon={faGem} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500" />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border border-emerald-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-emerald-100">
              <FontAwesomeIcon icon={faGem} className="text-5xl text-emerald-400 mb-4" />
              <p className="text-2xl font-bold text-emerald-800 mb-4">No Products Found</p>
              <p className="text-emerald-700">Try adjusting your search to discover our collection</p>
            </div>
          </div>
        )}
        {filteredProducts.map((product, idx) => (
          <div
            key={product.id}
            className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
              product.featured ? 'ring-2 ring-emerald-300' : ''
            }`}
            style={{ animation: animate ? `elegantAppear 0.6s ease forwards ${idx * 0.1}s` : "none", opacity: 0 }}
          >
            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-emerald-500 text-white px-3 py-1 rounded-full font-semibold text-xs flex items-center gap-1 shadow-md">
                  <FontAwesomeIcon icon={faCrown} className="text-xs" />
                  Featured
                </div>
              </div>
            )}

            {/* Product Image */}
            <Link to={`/materials/${product.id}`} className="block">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
              </div>
            </Link>
            
            {/* Product Info - Fixed to cover full width */}
            <div className="p-5 bg-gradient-to-t from-emerald-700 to-emerald-600 relative -mt-1">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-1 bg-emerald-300 rounded-full"></div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white flex-1 pr-3 leading-snug">{product.title}</h3>
                  <span className="bg-emerald-500/30 text-emerald-100 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">₹{product.price}</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleBuy(product)}
                  className="flex-1 bg-white text-emerald-700 px-3 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <FontAwesomeIcon icon={faBagShopping} className="group-hover:scale-110 transition-transform" />
                  Buy
                </button>
                <button
                  onClick={() => handleShare(product)}
                  className="flex-1 bg-emerald-500 text-white px-3 py-2.5 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group border border-emerald-400"
                >
                  <FontAwesomeIcon icon={faShare} className="group-hover:scale-110 transition-transform" />
                  Share
                </button>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-300/30 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-300/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-300/30 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-300/30 rounded-br-2xl"></div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 inline-block border border-emerald-100">
          <p className="text-emerald-700 font-medium italic">
            "Each piece tells a story of tradition and craftsmanship"
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes elegantAppear {
          0% { 
            transform: translateY(20px) scale(0.98); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
      `}</style>

    </div>
  );
};

export default Products;


