import React, { useState } from "react";
import { Link } from "react-router-dom";


import Bowl from "../../public/Bowlwithoutbase.png";
import Coffeecup from "../../public/Coffeecup.png";
import Juicecup from "../../public/Juicecup.png";
import Payasacup from "../../public/PayasaCup.png";
import Bowlone from "../../public/Bowl-one.jpg";
import Bowltwo from "../../public/Bowl-two.jpg";
import Bowlthree from "../../public/Bowl-three.jpg";
import Bowlwithbase from "../../public/BowlwithBase.png";
import Candleholder from "../../public/Candleholder.png";
import CoirBirdnest from "../../public/Coir-BirdNest.png";
import Jar from "../../public/Jar.png";
import Jumblebowl from "../../public/Jumbobowl.png";
import Ladles from "../../public/Ladles-two.png";
import Stick from "../../public/Ladles.png";
import Penstand from "../../public/PenStand.png";
import PlantHolder from "../../public/PlantHolderimage.png";
import ServingLadles from "../../public/Servingladles.png";
import ShellBirdfeeder from "../../public/ShellBirdNest.png";
import Soaptry from "../../public/SoapTray.png";
import Soupbowl from "../../public/SoupBowl.png";
import Wavystick from "../../public/Wavystickladles.png";

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
  { id: 21, title: "Serving Ladles", price: "₹300.00", img: ServingLadles },
];

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

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
              <Link
                key={p.id}
                to={`/materials/${p.id}`}
                className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="flex items-center justify-center bg-white h-60 w-full">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-56 object-contain p-3 transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-emerald-700 font-bold mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
