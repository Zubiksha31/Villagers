import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShare } from "@fortawesome/free-solid-svg-icons";

// Product images
import Bowl from "../assets/Bowlwithoutbase.png";
import Coffeecup from "../assets/Coffeecup.png";
import Juicecup from "../assets/Juicecup.png";
import Payasacup from "../assets/PayasaCup.png";
import Bowlone from "../assets/Bowl-one.jpg";
import Bowltwo from "../assets/Bowl-two.jpg";
import Bowlthree from "../assets/Bowl-three.jpg";
import Bowlwithbase from "../assets/BowlwithBase.png";
import Candleholder from "../assets/Candleholder.png";
import CoirBirdnest from "../assets/Coir-BirdNest.png";
import Jar from "../assets/Jar.png";
import Jumblebowl from "../assets/Jumbobowl.png";
import Ladles from "../assets/Ladles-two.png";
import Stick from "../assets/Ladles.png";
import Penstand from "../assets/PenStand.png";
import PlantHolder from "../assets/PlantHolderimage.png";
import ShellBirdfeeder from "../assets/Shell-BirdFeeder.png";
import Soaptry from "../assets/SoapTray.png";
import Soupbowl from "../assets/SoupBowl.png";
import Wavystick from "../assets/Wavystickladles.png";

const products = [
  { id: 1, title: "Bowl without Base", price: "₹200.00", img: Bowl },
  { id: 2, title: "Coffee Cup", price: "₹350.00", img: Coffeecup },
  { id: 3, title: "Juice Cup", price: "₹250.00", img: Juicecup },
  { id: 4, title: "Payasa Cup", price: "₹180.00", img: Payasacup },
  { id: 5, title: "Bowl One", price: "₹300.00", img: Bowlone },
  { id: 6, title: "Bowl Two", price: "₹320.00", img: Bowltwo },
  { id: 7, title: "Bowl Three", price: "₹340.00", img: Bowlthree },
  { id: 8, title: "Bowl with Base", price: "₹280.00", img: Bowlwithbase },
  { id: 9, title: "Candle Holder", price: "₹200.00", img: Candleholder },
  { id: 10, title: "Coir Bird Nest", price: "₹260.00", img: CoirBirdnest },
  { id: 11, title: "Jar", price: "₹210.00", img: Jar },
  { id: 12, title: "Jumbo Bowl", price: "₹400.00", img: Jumblebowl },
  { id: 13, title: "Serving Ladles", price: "₹230.00", img: Ladles },
  { id: 14, title: "Stick Ladle", price: "₹240.00", img: Stick },
  { id: 15, title: "Pen Stand", price: "₹150.00", img: Penstand },
  { id: 16, title: "Plant Holder", price: "₹500.00", img: PlantHolder },
  { id: 17, title: "Shell Bird Feeder", price: "₹300.00", img: ShellBirdfeeder },
  { id: 18, title: "Soap Tray", price: "₹120.00", img: Soaptry },
  { id: 19, title: "Soup Bowl", price: "₹210.00", img: Soupbowl },
  { id: 20, title: "Wave Stick Ladles", price: "₹270.00", img: Wavystick },
];

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuy = (product) => {
    const productUrl = `${window.location.origin}/materials/${product.id}`;
    const message = `🌿 Hello! I'm interested in buying this product:\n\n*${product.title}*\nPrice: ${product.price}\n\n${productUrl}`;
    window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShare = (product) => {
    const productUrl = `${window.location.origin}/materials/${product.id}`;
    const shareMessage = `🌿 Check out this eco-friendly product!\n\n*${product.title}*\nPrice: ${product.price}\n\n${productUrl}\n\nShop sustainable, live green! 🌱`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 pt-28 px-6">
      <header className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-emerald-700 text-center sm:text-left">
          All Eco Products
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-emerald-400 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
        />
      </header>

      <main className="max-w-6xl mx-auto py-12">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <Link to={`/materials/${p.id}`} className="block">
                  <div className="flex items-center justify-center bg-white h-60 w-full">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="max-h-56 object-contain p-3 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4 text-center rounded-lg shadow-md">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">Eco-friendly product 🌱</p>
                  <p className="text-emerald-700 font-bold mt-1">{p.price} / piece</p>

                  <div className="flex flex-col sm:flex-row justify-center gap-2 mt-3">
                    <button
                      onClick={() => handleBuy(p)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faBagShopping} /> Buy
                    </button>

                    <button
                      onClick={() => handleShare(p)}
                      className="border border-emerald-500 text-emerald-600 font-semibold py-2 px-4 rounded hover:bg-emerald-50 w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faShare} /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
