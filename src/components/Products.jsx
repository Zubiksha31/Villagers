import React, { useState } from "react";
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
import ServingLadles from "../assets/Servingladles.png";
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
  { id: 11, title: "Storage Jar", price: "₹210.00", img: Jar },
  { id: 12, title: "Jumbo Bowl", price: "₹400.00", img: Jumblebowl },
  { id: 13, title: "Serving Ladles", price: "₹230.00", img: Ladles },
  { id: 14, title: "Stick Ladle", price: "₹240.00", img: Stick },
  { id: 15, title: "Pen Stand", price: "₹150.00", img: Penstand },
  { id: 16, title: "Plant Holder", price: "₹500.00", img: PlantHolder },
  { id: 17, title: "Shell Bird Feeder", price: "₹300.00", img: ShellBirdfeeder },
  { id: 18, title: "Soap Tray", price: "₹120.00", img: Soaptry },
  { id: 19, title: "Soup Bowl", price: "₹210.00", img: Soupbowl },
  { id: 20, title: "Wave Stick Ladles", price: "₹270.00", img: Wavystick },
  { id: 21, title: "Serving Ladles", price: "300.00", img: ServingLadles }
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuy = (productName) => {
    const message = `Hello! I'm interested in buying the product: ${productName}`;
    window.open(
      `https://wa.me/918438551278?text=${encodeURIComponent(message)}`,
      "_blank"
    );
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
        
        {!selectedProduct ? (
          filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 mt-10">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-emerald-700 font-bold">
                        {p.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuy(p.title);
                        }}
                        className="px-3 py-1 text-sm border rounded-md hover:bg-emerald-50"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-sm text-emerald-600 mb-4 hover:underline"
            >
              
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="w-full h-80 object-cover rounded-lg shadow"
              />
              <div>
                <h2 className="text-3xl font-bold text-emerald-700">
                  {selectedProduct.title}
                </h2>
                <p className="mt-3 text-xl font-semibold text-gray-800">
                  {selectedProduct.price}
                </p>
                <p className="mt-4 text-gray-600">
                  Product manufactured using 100% eco-friendly natural wood.
                </p>
                <button
                  onClick={() => handleBuy(selectedProduct.title)}
                  className="mt-6 px-5 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition"
                >
                  Buy on WhatsApp
                </button>
              </div>
            </div>

            
            <div className="mt-10 border-t pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Customer Reviews 🌿
              </h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    “Amazing quality and finish. Loved the eco-friendly touch!”
                  </p>
                  <span className="text-sm text-gray-500">- Priya R.</span>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    “Fast delivery and good packaging. Will buy again!”
                  </p>
                  <span className="text-sm text-gray-500">- Ramesh K.</span>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    “Loved the texture and design, perfect for gifting.”
                  </p>
                  <span className="text-sm text-gray-500">- Anita S.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;