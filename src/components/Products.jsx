// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping, faShare } from "@fortawesome/free-solid-svg-icons";

// // Import product images

// import Bowl from "../assets/Bowl1.jpg";
// import Coffeecup from "../assets/Bowl2.jpg";
// import Juicecup from "../assets/Bowl3.jpg";
// import Payasacup from "../assets/Bowl4.jpg";
// import Bowlone from "../assets/Bowl5.jpg";
// import Bowltwo from "../assets/Bowl6.jpg";
// import Bowlthree from "../assets/Bowl7.jpg";
// import Bowlwithbase from "../assets/Bowl8.jpg";
// import Candleholder from "../assets/Bowl9.jpg";
// import CoirBirdnest from "../assets/Bowl10.jpg";
// import Jar from "../assets/Bowl11.jpg";
// import Jumblebowl from "../assets/Bowl12.jpg";
// import Ladles from "../assets/Bowl13.jpg";
// import Stick from "../assets/Bowl14.jpg";
// import Penstand from "../assets/Bowl15.jpg";
// import PlantHolder from "../assets/Bowl16.jpg";
// import ShellBirdfeeder from "../assets/Bowl17.jpg";
// import Soaptry from "../assets/Bowl18.jpg";
// import Soupbowl from "../assets/Bowl19.jpg";
// import BowlTwenty from "../assets/Bowl20.jpg";
// import BowlTwentyone from "../assets/Bowl21.jpg";
// import BowlTwentyTwo from "../assets/Bowl22.jpg";
// import BowlTwentyThree from "../assets/Bowl23.jpg";
// import BowlTwentyFour from "../assets/Bowl24.jpg";
// import BowlTwentyFive from "../assets/Bowl25.jpg";
// import BowlTwentySix from "../assets/Bowl26.jpg";
// import BowlTwentySeven from "../assets/Bowl27.jpg";
// import BowlTwentyEight from "../assets/Bowl28.jpg";
// import BowlTwentyNine from "../assets/Bowl29.jpg";
// import BowlThirty from "../assets/Bowl30.jpg";
// import BowlThirtyone from "../assets/Bowl31.jpg";
// import BowlThirtyTwo from "../assets/Bowl32.jpg";
// import BowlThirtyThree from "../assets/Bowl33.jpg";
// import BowlThirtyFour from "../assets/Bowl34.jpg";
// import BowlThirtyFive from "../assets/Bowl35.jpg";

// const products = [
//   { id: 1, title: "Bowl 1", price: 200, category: "Kitchen & Dining", img: Bowl },
//   { id: 2, title: "Bowl 2", price: 210, category: "Kitchen & Dining", img: Coffeecup },
//   { id: 3, title: "Bowl 3", price: 220, category: "Kitchen & Dining", img: Juicecup },
//   { id: 4, title: "Bowl 4", price: 230, category: "Kitchen & Dining", img: Payasacup },
//   { id: 5, title: "Bowl 5", price: 240, category: "Kitchen & Dining", img: Bowlone },
//   { id: 6, title: "Bowl 6", price: 250, category: "Kitchen & Dining", img: Bowltwo },
//   { id: 7, title: "Bowl 7", price: 260, category: "Kitchen & Dining", img: Bowlthree },
//   { id: 8, title: "Bowl 8", price: 270, category: "Kitchen & Dining", img: Bowlwithbase },
//   { id: 9, title: "Bowl 9", price: 280, category: "Home Decor", img: Candleholder },
//   { id: 10, title: "Bowl 10", price: 290, category: "Garden & Outdoor", img: CoirBirdnest },
//   { id: 11, title: "Bowl 11", price: 300, category: "Storage", img: Jar },
//   { id: 12, title: "Bowl 12", price: 310, category: "Kitchen & Dining", img: Jumblebowl },
//   { id: 13, title: "Bowl 13", price: 320, category: "Kitchen & Dining", img: Ladles },
//   { id: 14, title: "Bowl 14", price: 330, category: "Kitchen & Dining", img: Stick },
//   { id: 15, title: "Bowl 15", price: 340, category: "Office & Stationery", img: Penstand },
//   { id: 16, title: "Bowl 16", price: 350, category: "Garden & Outdoor", img: PlantHolder },
//   { id: 17, title: "Bowl 17", price: 360, category: "Garden & Outdoor", img: ShellBirdfeeder },
//   { id: 18, title: "Bowl 18", price: 370, category: "Bathroom", img: Soaptry },
//   { id: 19, title: "Bowl 19", price: 380, category: "Kitchen & Dining", img: Soupbowl },
//   { id: 20, title: "Bowl 20", price: 390, category: "Kitchen & Dining", img: BowlTwenty },
//   { id: 21, title: "Bowl 21", price: 400, category: "Kitchen & Dining", img: BowlTwentyone },
//   { id: 22, title: "Bowl 22", price: 410, category: "Kitchen & Dining", img: BowlTwentyTwo },
//   { id: 23, title: "Bowl 23", price: 420, category: "Kitchen & Dining", img: BowlTwentyThree },
//   { id: 24, title: "Bowl 24", price: 430, category: "Kitchen & Dining", img: BowlTwentyFour },
//   { id: 25, title: "Bowl 25", price: 440, category: "Kitchen & Dining", img: BowlTwentyFive },
//   { id: 26, title: "Bowl 26", price: 450, category: "Kitchen & Dining", img: BowlTwentySix },
//   { id: 27, title: "Bowl 27", price: 460, category: "Kitchen & Dining", img: BowlTwentySeven },
//   { id: 28, title: "Bowl 28", price: 470, category: "Kitchen & Dining", img: BowlTwentyEight },
//   { id: 29, title: "Bowl 29", price: 480, category: "Kitchen & Dining", img: BowlTwentyNine },
//   { id: 30, title: "Bowl 30", price: 490, category: "Kitchen & Dining", img: BowlThirty },
//   { id: 31, title: "Bowl 31", price: 500, category: "Kitchen & Dining", img: BowlThirtyone },
//   { id: 32, title: "Bowl 32", price: 510, category: "Kitchen & Dining", img: BowlThirtyTwo },
//   { id: 33, title: "Bowl 33", price: 520, category: "Kitchen & Dining", img: BowlThirtyThree },
//   { id: 34, title: "Bowl 34", price: 530, category: "Kitchen & Dining", img: BowlThirtyFour },
//   { id: 35, title: "Bowl 35", price: 540, category: "Kitchen & Dining", img: BowlThirtyFive },
// ];


// const categories = ["All", ...new Set(products.map(p => p.category))];

// const Products = () => {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredProducts = products.filter(p => {
//     const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleBuy = (product) => {
//     const message = `Hello! I'm interested in buying ${product.title} for ₹${product.price}`;
//     window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   const handleShare = (product) => {
//     const message = `Check out this eco-friendly product: ${product.title} for ₹${product.price}`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-emerald-50 pt-32 px-4 sm:px-6 pb-20">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-extrabold text-emerald-900 mb-2">🌿 Villagers Products</h1>
//         <p className="text-lg text-green-800">Sustainable, handcrafted, eco-friendly items</p>
//       </div>

//       {/* Search and Categories */}
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full sm:w-1/2 px-5 py-3 rounded-full border-2 border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
//         />
//         <div className="flex flex-wrap gap-2">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
//                 selectedCategory === cat
//                   ? "bg-emerald-800 text-amber-50 shadow-lg scale-105"
//                   : "bg-green-200 text-emerald-900 hover:bg-green-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {filteredProducts.length === 0 && (
//           <div className="col-span-full text-center py-20 text-emerald-900">
//             <p className="text-2xl mb-2">No products found</p>
//             <p>Try adjusting your search or category filters</p>
//           </div>
//         )}
//         {filteredProducts.map((product, idx) => (
//           <Link
//             key={product.id}
//             to={`/materials/${product.id}`}
//             className={`relative overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-105 block bg-white`}
//             style={{ animation: animate ? `fadeUp 0.5s ease forwards ${idx * 0.1}s` : "none", opacity: 0 }}
//           >
//             <div className="flex justify-center items-center h-80 p-4">
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity">
//               <h3 className="text-2xl font-bold text-amber-50">{product.title}</h3>
//               <p className="text-lg font-semibold text-green-100 mb-3">₹{product.price}</p>
//               <div className="flex gap-3">
//                 <button
//                   onClick={(e) => { e.preventDefault(); handleBuy(product); }}
//                   className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all"
//                 >
//                   <FontAwesomeIcon icon={faBagShopping} /> Buy
//                 </button>
//                 <button
//                   onClick={(e) => { e.preventDefault(); handleShare(product); }}
//                   className="bg-amber-100 text-emerald-900 px-4 py-2 rounded-full hover:bg-amber-200 transition-all"
//                 >
//                   <FontAwesomeIcon icon={faShare} /> Share
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { transform: translateY(20px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Products;

// 



// 

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping, faShare, faCrown, faStar, faGem } from "@fortawesome/free-solid-svg-icons";

// // Import product images
// import Bowl from "../assets/Bowl1.jpg";
// import Coffeecup from "../assets/Bowl2.jpg";
// import Juicecup from "../assets/Bowl3.jpg";
// import Payasacup from "../assets/Bowl4.jpg";
// import Bowlone from "../assets/Bowl5.jpg";
// import Bowltwo from "../assets/Bowl6.jpg";
// import Bowlthree from "../assets/Bowl7.jpg";
// import Bowlwithbase from "../assets/Bowl8.jpg";
// import Candleholder from "../assets/Bowl9.jpg";
// import CoirBirdnest from "../assets/Bowl10.jpg";
// import Jar from "../assets/Bowl11.jpg";
// import Jumblebowl from "../assets/Bowl12.jpg";
// import Ladles from "../assets/Bowl13.jpg";
// import Stick from "../assets/Bowl14.jpg";
// import Penstand from "../assets/Bowl15.jpg";
// import PlantHolder from "../assets/Bowl16.jpg";
// import ShellBirdfeeder from "../assets/Bowl17.jpg";
// import Soaptry from "../assets/Bowl18.jpg";
// import Soupbowl from "../assets/Bowl19.jpg";
// import BowlTwenty from "../assets/Bowl20.jpg";
// import BowlTwentyone from "../assets/Bowl21.jpg";
// import BowlTwentyTwo from "../assets/Bowl22.jpg";
// import BowlTwentyThree from "../assets/Bowl23.jpg";
// import BowlTwentyFour from "../assets/Bowl24.jpg";
// import BowlTwentyFive from "../assets/Bowl25.jpg";
// import BowlTwentySix from "../assets/Bowl26.jpg";
// import BowlTwentySeven from "../assets/Bowl27.jpg";
// import BowlTwentyEight from "../assets/Bowl28.jpg";
// import BowlTwentyNine from "../assets/Bowl29.jpg";
// import BowlThirty from "../assets/Bowl30.jpg";
// import BowlThirtyone from "../assets/Bowl31.jpg";
// import BowlThirtyTwo from "../assets/Bowl32.jpg";
// import BowlThirtyThree from "../assets/Bowl33.jpg";
// import BowlThirtyFour from "../assets/Bowl34.jpg";
// import BowlThirtyFive from "../assets/Bowl35.jpg";

// const products = [
//   { id: 1, title: "Artisan Bowl", price: 200, category: "Kitchen & Dining", img: Bowl, featured: true },
//   { id: 2, title: "Royal Coffee Cup", price: 210, category: "Kitchen & Dining", img: Coffeecup },
//   { id: 3, title: "Elegant Juice Cup", price: 220, category: "Kitchen & Dining", img: Juicecup },
//   { id: 4, title: "Traditional Payasa Cup", price: 230, category: "Kitchen & Dining", img: Payasacup },
//   { id: 5, title: "Heritage Bowl", price: 240, category: "Kitchen & Dining", img: Bowlone, featured: true },
//   { id: 6, title: "Classic Serving Bowl", price: 250, category: "Kitchen & Dining", img: Bowltwo },
//   { id: 7, title: "Premium Dining Bowl", price: 260, category: "Kitchen & Dining", img: Bowlthree },
//   { id: 8, title: "Luxury Bowl with Base", price: 270, category: "Kitchen & Dining", img: Bowlwithbase },
//   { id: 9, title: "Royal Candle Holder", price: 280, category: "Home Decor", img: Candleholder, featured: true },
//   { id: 10, title: "Natural Coir Birdnest", price: 290, category: "Garden & Outdoor", img: CoirBirdnest },
//   { id: 11, title: "Elegant Storage Jar", price: 300, category: "Storage", img: Jar },
//   { id: 12, title: "Designer Jumble Bowl", price: 310, category: "Kitchen & Dining", img: Jumblebowl },
//   { id: 13, title: "Artisan Ladles Set", price: 320, category: "Kitchen & Dining", img: Ladles },
//   { id: 14, title: "Traditional Stir Stick", price: 330, category: "Kitchen & Dining", img: Stick },
//   { id: 15, title: "Royal Pen Stand", price: 340, category: "Office & Stationery", img: Penstand },
//   { id: 16, title: "Elegant Plant Holder", price: 350, category: "Garden & Outdoor", img: PlantHolder },
//   { id: 17, title: "Natural Bird Feeder", price: 360, category: "Garden & Outdoor", img: ShellBirdfeeder },
//   { id: 18, title: "Luxury Soap Tray", price: 370, category: "Bathroom", img: Soaptry },
//   { id: 19, title: "Premium Soup Bowl", price: 380, category: "Kitchen & Dining", img: Soupbowl },
//   { id: 20, title: "Artisan Collection Bowl", price: 390, category: "Kitchen & Dining", img: BowlTwenty },
//   { id: 21, title: "Royal Dining Bowl", price: 400, category: "Kitchen & Dining", img: BowlTwentyone, featured: true },
//   { id: 22, title: "Elegant Serving Bowl", price: 410, category: "Kitchen & Dining", img: BowlTwentyTwo },
//   { id: 23, title: "Traditional Art Bowl", price: 420, category: "Kitchen & Dining", img: BowlTwentyThree },
//   { id: 24, title: "Premium Collection", price: 430, category: "Kitchen & Dining", img: BowlTwentyFour },
//   { id: 25, title: "Luxury Art Piece", price: 440, category: "Kitchen & Dining", img: BowlTwentyFive },
//   { id: 26, title: "Royal Heritage Bowl", price: 450, category: "Kitchen & Dining", img: BowlTwentySix },
//   { id: 27, title: "Elegant Dining Set", price: 460, category: "Kitchen & Dining", img: BowlTwentySeven },
//   { id: 28, title: "Artisan Masterpiece", price: 470, category: "Kitchen & Dining", img: BowlTwentyEight },
//   { id: 29, title: "Premium Royal Bowl", price: 480, category: "Kitchen & Dining", img: BowlTwentyNine },
//   { id: 30, title: "Luxury Collection", price: 490, category: "Kitchen & Dining", img: BowlThirty },
//   { id: 31, title: "Royal Artisan Bowl", price: 500, category: "Kitchen & Dining", img: BowlThirtyone },
//   { id: 32, title: "Elegant Premium Bowl", price: 510, category: "Kitchen & Dining", img: BowlThirtyTwo },
//   { id: 33, title: "Traditional Royal", price: 520, category: "Kitchen & Dining", img: BowlThirtyThree },
//   { id: 34, title: "Artisan Luxury", price: 530, category: "Kitchen & Dining", img: BowlThirtyFour },
//   { id: 35, title: "Royal Premium", price: 540, category: "Kitchen & Dining", img: BowlThirtyFive, featured: true },
// ];

// const categories = ["All", ...new Set(products.map(p => p.category))];

// const Products = () => {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredProducts = products.filter(p => {
//     const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleBuy = (product) => {
//     const message = `Hello! I'm interested in buying ${product.title} for ₹${product.price}`;
//     window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   const handleShare = (product) => {
//     const message = `Check out this exquisite eco-friendly product: ${product.title} for ₹${product.price}`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50 pt-32 px-4 sm:px-6 pb-20">
//       {/* Royal Header */}
//       <div className="text-center mb-16 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent transform -skew-y-2"></div>
//         <h1 className="text-6xl font-bold text-emerald-900 mb-4 relative">
//           <FontAwesomeIcon icon={faCrown} className="text-amber-500 mr-4" />
//           Villagers Royal Collection
//           <FontAwesomeIcon icon={faCrown} className="text-amber-500 ml-4" />
//         </h1>
//         <p className="text-xl text-emerald-700 font-light italic">Exquisite Handcrafted Masterpieces</p>
//         <div className="flex justify-center gap-2 mt-4">
//           <FontAwesomeIcon icon={faStar} className="text-amber-400" />
//           <FontAwesomeIcon icon={faStar} className="text-amber-400" />
//           <FontAwesomeIcon icon={faStar} className="text-amber-400" />
//           <FontAwesomeIcon icon={faStar} className="text-amber-400" />
//           <FontAwesomeIcon icon={faStar} className="text-amber-400" />
//         </div>
//       </div>

//       {/* Royal Search and Categories */}
//       <div className="max-w-7xl mx-auto mb-16">
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-amber-200">
//           <div className="flex flex-col lg:flex-row gap-8 items-center">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 placeholder="Discover our royal collection..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full px-6 py-4 rounded-2xl border-2 border-amber-300 bg-amber-50/50 focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-400 text-emerald-900 placeholder-emerald-600 font-medium text-lg transition-all"
//               />
//               <FontAwesomeIcon icon={faGem} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-500" />
//             </div>
            
//             <div className="flex flex-wrap gap-3 justify-center">
//               {categories.map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
//                     selectedCategory === cat
//                       ? "bg-gradient-to-r from-emerald-700 to-emerald-800 text-amber-50 shadow-lg ring-2 ring-amber-300 ring-opacity-50"
//                       : "bg-amber-100 text-emerald-800 hover:bg-amber-200 border border-amber-200"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Royal Products Grid */}
//       <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {filteredProducts.length === 0 && (
//           <div className="col-span-full text-center py-20">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-amber-200">
//               <FontAwesomeIcon icon={faGem} className="text-6xl text-amber-400 mb-4" />
//               <p className="text-3xl font-bold text-emerald-900 mb-4">No Royal Treasures Found</p>
//               <p className="text-lg text-emerald-700">Refine your search to discover our exquisite collection</p>
//             </div>
//           </div>
//         )}
//         {filteredProducts.map((product, idx) => (
//           <div
//             key={product.id}
//             className={`group relative bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-100 transition-all duration-500 hover:shadow-3xl hover:scale-105 ${
//               product.featured ? 'ring-4 ring-amber-300 ring-opacity-60' : ''
//             }`}
//             style={{ animation: animate ? `royalAppear 0.6s ease forwards ${idx * 0.1}s` : "none", opacity: 0 }}
//           >
//             {/* Featured Badge */}
//             {product.featured && (
//               <div className="absolute top-4 left-4 z-20">
//                 <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
//                   <FontAwesomeIcon icon={faCrown} />
//                   Featured
//                 </div>
//               </div>
//             )}

//             {/* Product Image */}
//             <Link to={`/materials/${product.id}`} className="block">
//               <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100">
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
//               </div>
//             </Link>
            
//             {/* Royal Product Info */}
//             <div className="p-6 bg-gradient-to-t from-emerald-900 to-emerald-800 relative">
//               {/* Decorative Elements */}
//               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
//               </div>
              
//               <div className="mb-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-amber-50 flex-1 pr-4">{product.title}</h3>
//                   <span className="bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30">
//                     {product.category}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <p className="text-2xl font-bold text-amber-300">₹{product.price}</p>
//                   <div className="flex gap-1">
//                     <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
//                     <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
//                     <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
//                     <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
//                     <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
//                   </div>
//                 </div>
//               </div>
              
//               {/* Royal Action Buttons */}
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => handleBuy(product)}
//                   className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-900 px-4 py-3 rounded-xl font-bold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
//                 >
//                   <FontAwesomeIcon icon={faBagShopping} className="group-hover:scale-110 transition-transform" />
//                   Acquire
//                 </button>
//                 <button
//                   onClick={() => handleShare(product)}
//                   className="flex-1 bg-emerald-700 text-amber-50 px-4 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group border border-emerald-600"
//                 >
//                   <FontAwesomeIcon icon={faShare} className="group-hover:scale-110 transition-transform" />
//                   Share
//                 </button>
//               </div>
//             </div>

//             {/* Corner Accents */}
//             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-300/50 rounded-tl-3xl"></div>
//             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-300/50 rounded-tr-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-300/50 rounded-bl-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-300/50 rounded-br-3xl"></div>
//           </div>
//         ))}
//       </div>

//       {/* Royal Footer Note */}
//       <div className="text-center mt-16">
//         <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 inline-block border border-amber-200">
//           <p className="text-emerald-800 font-semibold italic">
//             "Each piece tells a story of tradition, craftsmanship, and royal elegance"
//           </p>
//         </div>
//       </div>

//       {/* Royal Animations */}
//       <style>{`
//         @keyframes royalAppear {
//           0% { 
//             transform: translateY(30px) scale(0.95); 
//             opacity: 0; 
//           }
//           100% { 
//             transform: translateY(0) scale(1); 
//             opacity: 1; 
//           }
//         }
//         .shadow-3xl {
//           box-shadow: 0 35px 60px -15px rgba(6, 78, 59, 0.3), 0 0 25px -5px rgba(245, 158, 11, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Products;





// 






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShare, faCrown, faGem } from "@fortawesome/free-solid-svg-icons";

// Import product images
import Bowl from "../assets/Bowl1.jpg";
import Coffeecup from "../assets/Bowl2.jpg";
import Juicecup from "../assets/Bowl3.jpg";
import Payasacup from "../assets/Bowl4.jpg";
import Bowlone from "../assets/Bowl5.jpg";
import Bowltwo from "../assets/Bowl6.jpg";
import Bowlthree from "../assets/Bowl7.jpg";
import Bowlwithbase from "../assets/Bowl8.jpg";
import Candleholder from "../assets/Bowl9.jpg";
import CoirBirdnest from "../assets/Bowl10.jpg";
import Jar from "../assets/Bowl11.jpg";
import Jumblebowl from "../assets/Bowl12.jpg";
import Ladles from "../assets/Bowl13.jpg";
import Stick from "../assets/Bowl14.jpg";
import Penstand from "../assets/Bowl15.jpg";
import PlantHolder from "../assets/Bowl16.jpg";
import ShellBirdfeeder from "../assets/Bowl17.jpg";
import Soaptry from "../assets/Bowl18.jpg";
import Soupbowl from "../assets/Bowl19.jpg";
import BowlTwenty from "../assets/Bowl20.jpg";
import BowlTwentyone from "../assets/Bowl21.jpg";
import BowlTwentyTwo from "../assets/Bowl22.jpg";
import BowlTwentyThree from "../assets/Bowl23.jpg";
import BowlTwentyFour from "../assets/Bowl24.jpg";
import BowlTwentyFive from "../assets/Bowl25.jpg";
import BowlTwentySix from "../assets/Bowl26.jpg";
import BowlTwentySeven from "../assets/Bowl27.jpg";
import BowlTwentyEight from "../assets/Bowl28.jpg";
import BowlTwentyNine from "../assets/Bowl29.jpg";
import BowlThirty from "../assets/Bowl30.jpg";
import BowlThirtyone from "../assets/Bowl31.jpg";
import BowlThirtyTwo from "../assets/Bowl32.jpg";
import BowlThirtyThree from "../assets/Bowl33.jpg";
import BowlThirtyFour from "../assets/Bowl34.jpg";
import BowlThirtyFive from "../assets/Bowl35.jpg";

const products = [
  { id: 1, title: "Artisan Bowl", price: 200, category: "Kitchen & Dining", img: Bowl, featured: true },
  { id: 2, title: "Elegant Coffee Cup", price: 210, category: "Kitchen & Dining", img: Coffeecup },
  { id: 3, title: "Smooth Juice Cup", price: 220, category: "Kitchen & Dining", img: Juicecup },
  { id: 4, title: "Traditional Payasa Cup", price: 230, category: "Kitchen & Dining", img: Payasacup },
  { id: 5, title: "Heritage Bowl", price: 240, category: "Kitchen & Dining", img: Bowlone, featured: true },
  { id: 6, title: "Classic Serving Bowl", price: 250, category: "Kitchen & Dining", img: Bowltwo },
  { id: 7, title: "Premium Dining Bowl", price: 260, category: "Kitchen & Dining", img: Bowlthree },
  { id: 8, title: "Bowl with Base", price: 270, category: "Kitchen & Dining", img: Bowlwithbase },
  { id: 9, title: "Candle Holder", price: 280, category: "Home Decor", img: Candleholder, featured: true },
  { id: 10, title: "Natural Coir Birdnest", price: 290, category: "Garden & Outdoor", img: CoirBirdnest },
  { id: 11, title: "Elegant Storage Jar", price: 300, category: "Storage", img: Jar },
  { id: 12, title: "Designer Jumble Bowl", price: 310, category: "Kitchen & Dining", img: Jumblebowl },
  { id: 13, title: "Artisan Ladles Set", price: 320, category: "Kitchen & Dining", img: Ladles },
  { id: 14, title: "Traditional Stir Stick", price: 330, category: "Kitchen & Dining", img: Stick },
  { id: 15, title: "Pen Stand", price: 340, category: "Office & Stationery", img: Penstand },
  { id: 16, title: "Elegant Plant Holder", price: 350, category: "Garden & Outdoor", img: PlantHolder },
  { id: 17, title: "Natural Bird Feeder", price: 360, category: "Garden & Outdoor", img: ShellBirdfeeder },
  { id: 18, title: "Soap Tray", price: 370, category: "Bathroom", img: Soaptry },
  { id: 19, title: "Premium Soup Bowl", price: 380, category: "Kitchen & Dining", img: Soupbowl },
  { id: 20, title: "Artisan Collection Bowl", price: 390, category: "Kitchen & Dining", img: BowlTwenty },
  { id: 21, title: "Dining Bowl", price: 400, category: "Kitchen & Dining", img: BowlTwentyone, featured: true },
  { id: 22, title: "Elegant Serving Bowl", price: 410, category: "Kitchen & Dining", img: BowlTwentyTwo },
  { id: 23, title: "Traditional Art Bowl", price: 420, category: "Kitchen & Dining", img: BowlTwentyThree },
  { id: 24, title: "Premium Collection", price: 430, category: "Kitchen & Dining", img: BowlTwentyFour },
  { id: 25, title: "Art Piece", price: 440, category: "Kitchen & Dining", img: BowlTwentyFive },
  { id: 26, title: "Heritage Bowl", price: 450, category: "Kitchen & Dining", img: BowlTwentySix },
  { id: 27, title: "Elegant Dining Set", price: 460, category: "Kitchen & Dining", img: BowlTwentySeven },
  { id: 28, title: "Artisan Masterpiece", price: 470, category: "Kitchen & Dining", img: BowlTwentyEight },
  { id: 29, title: "Premium Bowl", price: 480, category: "Kitchen & Dining", img: BowlTwentyNine },
  { id: 30, title: "Collection Bowl", price: 490, category: "Kitchen & Dining", img: BowlThirty },
  { id: 31, title: "Artisan Bowl", price: 500, category: "Kitchen & Dining", img: BowlThirtyone },
  { id: 32, title: "Elegant Premium Bowl", price: 510, category: "Kitchen & Dining", img: BowlThirtyTwo },
  { id: 33, title: "Traditional Bowl", price: 520, category: "Kitchen & Dining", img: BowlThirtyThree },
  { id: 34, title: "Artisan Luxury", price: 530, category: "Kitchen & Dining", img: BowlThirtyFour },
  { id: 35, title: "Premium Bowl", price: 540, category: "Kitchen & Dining", img: BowlThirtyFive, featured: true },
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
    const message = `Hello! I'm interested in buying ${product.title} for ₹${product.price}`;
    window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShare = (product) => {
    const message = `Check out this exquisite eco-friendly product: ${product.title} for ₹${product.price}`;
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
            
            {/* Product Info */}
            <div className="p-5 bg-gradient-to-t from-emerald-700 to-emerald-600 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-1 bg-emerald-300 rounded-full"></div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white flex-1 pr-3">{product.title}</h3>
                  <span className="bg-emerald-500/30 text-emerald-100 px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-emerald-100">₹{product.price}</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleBuy(product)}
                  className="flex-1 bg-white text-emerald-700 px-3 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <FontAwesomeIcon icon={faBagShopping} className="group-hover:scale-110 transition-transform" />
                  Buy
                </button>
                <button
                  onClick={() => handleShare(product)}
                  className="flex-1 bg-emerald-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group border border-emerald-400"
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