import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";

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

export const images = {
  Bowl,                    // Ice Cream Oval Cup
  ComboPack,               // Combo Pack
  Icecreambowlround,       // Ice Cream Bowl Round
  Roundbowlpolished,       // Round Bowl Polished
  Rawpenstand,             // Raw Pen Stand
  Roundbowlsetpolished,    // Round Bowl Set Polished
  Icecreamovalcups,        // Ice Cream Oval Cups (Pack of 10)
  Ovalpolishedbowl,        // Oval Polished Bowl
  Snackbowlwithscoop,      // Snack Bowl with Scoop
  OvalGlossybowlset,       // Oval Glossy Bowl Set
  Laddle,                  // Laddle
  Miniteacup,              // Mini Tea Cup (Pack of 4)
  DesertBowlWithScoop,     // Dessert Bowl with Scoop
  Rawshellteacup,          // Raw Shell Tea Cup
  Rawshellround,           // Raw Shell Round
  Rawshelloval,            // Raw Shell Oval
  Matfinishjumbobowl       // Mat Finish Jumbo Bowl
};


const products = [
  { id: 1, title: "Ice Cream Oval Cup", price: 18, category: "Kitchen & Dining", img: Bowl, featured: true },

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


const ProductView = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Assign a unique userId per user (stored in localStorage)
  const [userId] = useState(() => {
    let storedId = localStorage.getItem("userId");
    if (!storedId) {
      storedId = Date.now().toString();
      localStorage.setItem("userId", storedId);
    }
    return storedId;
  });

  const [reviews, setReviews] = useState(() => {
    const savedReviews = JSON.parse(localStorage.getItem("productReviews")) || {};
    return savedReviews[id] || [];
  });
  const [reviewerName, setReviewerName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("productReviews")) || {};
    savedReviews[id] = reviews;
    localStorage.setItem("productReviews", JSON.stringify(savedReviews));
  }, [reviews, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
        Product Not Found
      </div>
    );
  }

  const handleBuy = () => {
    const productUrl = window.location.href;
    const message = `🌿 Hello! I'm interested in buying this product:\n\n*${product.title}*\nPrice: ${product.price}\n\n${productUrl}`;
    window.open(`https://wa.me/919092117788?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    const shareMessage = `🌿 Check out this eco-friendly product!\n\n*${product.title}*\nPrice: ${product.price}\n\n${productUrl}\n\nShop sustainable, live green! 🌱`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, "_blank");
  };

  const handleCopyLink = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl).then(() => alert("Product link copied!"));
  };

  const handleAddReview = () => {
    if (!reviewerName || !newReview || rating === 0) return;
    const newRev = {
      id: Date.now(),
      userId, // mark as your review
      name: reviewerName,
      comment: newReview,
      stars: rating,
      image: reviewImage,
    };
    setReviews([newRev, ...reviews]);
    setReviewerName("");
    setNewReview("");
    setRating(0);
    setReviewImage(null);
  };

  const handleDeleteReview = (reviewId) => {
    const filtered = reviews.filter((rev) => rev.id !== reviewId);
    setReviews(filtered);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-16 bg-white min-h-screen">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mt-8">
        <div className="w-full md:w-1/2 flex justify-center mt-24 sm:mt-24 md:mt-0">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-w-[380px] sm:max-w-[420px] object-contain rounded-lg bg-gray-50 p-4 shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left mt-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-700">{product.title}</h2>
          <p className="text-xl sm:text-2xl font-bold text-emerald-600">{product.price}</p>
          <p className="text-gray-600 leading-relaxed">
            Discover eco-friendly craftsmanship that blends sustainability with elegance. Each product is made from natural materials designed to enhance your green lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-3 justify-center md:justify-start">
            <button onClick={handleBuy} className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition w-full sm:w-auto">Buy Now</button>
            <button onClick={handleShare} className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition w-full sm:w-auto">Share on WhatsApp</button>
            <button onClick={handleCopyLink} className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition w-full sm:w-auto">Copy Link</button>
            <Link to="/materials" className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition text-center w-full sm:w-auto">Back to Products</Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 mt-10 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-emerald-700 text-center md:text-left">Customer Reviews 🌿</h3>
        <div className="space-y-4">
          {reviews.length === 0 && <p className="text-gray-600">No reviews yet. Be the first!</p>}
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-emerald-50 p-4 rounded-lg shadow-sm text-gray-700 relative">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < rev.stars ? "text-amber-400" : "text-gray-300"}>★</span>
                ))}
              </div>
              <p className="font-semibold text-gray-800">{rev.name}</p>
              <p>{rev.comment}</p>
              {rev.image && <img src={rev.image} alt="Customer review" className="mt-2 w-full max-w-[200px] rounded-md shadow-sm" />}
              {rev.userId === userId && (
                <button onClick={() => handleDeleteReview(rev.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700" title="Delete Review">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <input
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Your name"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 w-full sm:w-1/4"
            />
            <input
              type="text"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write a review..."
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 w-full sm:w-1/4"
            />
            <div className="w-full sm:w-1/4">
              <input
                type="file"
                accept="image/*"
                id="reviewImage"
                onChange={(e) => setReviewImage(URL.createObjectURL(e.target.files[0]))}
                className="hidden"
              />
              <label
                htmlFor="reviewImage"
                className="cursor-pointer border border-gray-300 rounded-md px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faUpload} />
                {reviewImage ? "Image Selected ✅" : "Add a memory with your review"}
              </label>
            </div>
            <div className="flex gap-1 text-2xl justify-center sm:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)} className={`cursor-pointer ${star <= rating ? "text-amber-400" : "text-gray-300"}`}>★</span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={handleAddReview} className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition w-full sm:w-auto">Post Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;



ProductView.jsx
