import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";



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

export const images = {
  Bowl,
  Coffeecup,
  Juicecup,
  Payasacup,
  Bowlone,
  Bowltwo,
  Bowlthree,
  Bowlwithbase,
  Candleholder,
  CoirBirdnest,
  Jar,
  Jumblebowl,
  Ladles,
  Stick,
  Penstand,
  PlantHolder,
  ShellBirdfeeder,
  Soaptry,
  Soupbowl,
  BowlTwenty,
  BowlTwentyone,
  BowlTwentyTwo,
  BowlTwentyThree,
  BowlTwentyFour,
  BowlTwentyFive,
  BowlTwentySix,
  BowlTwentySeven,
  BowlTwentyEight,
  BowlTwentyNine,
  BowlThirty,
  BowlThirtyone,
  BowlThirtyTwo,
  BowlThirtyThree,
  BowlThirtyFour,
  BowlThirtyFive,
};


const products = [
  { id: 1, title: "Bowl 1", price: 200, category: "Kitchen & Dining", img: Bowl },
  { id: 2, title: "Bowl 2", price: 210, category: "Kitchen & Dining", img: Coffeecup },
  { id: 3, title: "Bowl 3", price: 220, category: "Kitchen & Dining", img: Juicecup },
  { id: 4, title: "Bowl 4", price: 230, category: "Kitchen & Dining", img: Payasacup },
  { id: 5, title: "Bowl 5", price: 240, category: "Kitchen & Dining", img: Bowlone },
  { id: 6, title: "Bowl 6", price: 250, category: "Kitchen & Dining", img: Bowltwo },
  { id: 7, title: "Bowl 7", price: 260, category: "Kitchen & Dining", img: Bowlthree },
  { id: 8, title: "Bowl 8", price: 270, category: "Kitchen & Dining", img: Bowlwithbase },
  { id: 9, title: "Bowl 9", price: 280, category: "Home Decor", img: Candleholder },
  { id: 10, title: "Bowl 10", price: 290, category: "Garden & Outdoor", img: CoirBirdnest },
  { id: 11, title: "Bowl 11", price: 300, category: "Storage", img: Jar },
  { id: 12, title: "Bowl 12", price: 310, category: "Kitchen & Dining", img: Jumblebowl },
  { id: 13, title: "Bowl 13", price: 320, category: "Kitchen & Dining", img: Ladles },
  { id: 14, title: "Bowl 14", price: 330, category: "Kitchen & Dining", img: Stick },
  { id: 15, title: "Bowl 15", price: 340, category: "Office & Stationery", img: Penstand },
  { id: 16, title: "Bowl 16", price: 350, category: "Garden & Outdoor", img: PlantHolder },
  { id: 17, title: "Bowl 17", price: 360, category: "Garden & Outdoor", img: ShellBirdfeeder },
  { id: 18, title: "Bowl 18", price: 370, category: "Bathroom", img: Soaptry },
  { id: 19, title: "Bowl 19", price: 380, category: "Kitchen & Dining", img: Soupbowl },
  { id: 20, title: "Bowl 20", price: 390, category: "Kitchen & Dining", img: BowlTwenty },
  { id: 21, title: "Bowl 21", price: 400, category: "Kitchen & Dining", img: BowlTwentyone },
  { id: 22, title: "Bowl 22", price: 410, category: "Kitchen & Dining", img: BowlTwentyTwo },
  { id: 23, title: "Bowl 23", price: 420, category: "Kitchen & Dining", img: BowlTwentyThree },
  { id: 24, title: "Bowl 24", price: 430, category: "Kitchen & Dining", img: BowlTwentyFour },
  { id: 25, title: "Bowl 25", price: 440, category: "Kitchen & Dining", img: BowlTwentyFive },
  { id: 26, title: "Bowl 26", price: 450, category: "Kitchen & Dining", img: BowlTwentySix },
  { id: 27, title: "Bowl 27", price: 460, category: "Kitchen & Dining", img: BowlTwentySeven },
  { id: 28, title: "Bowl 28", price: 470, category: "Kitchen & Dining", img: BowlTwentyEight },
  { id: 29, title: "Bowl 29", price: 480, category: "Kitchen & Dining", img: BowlTwentyNine },
  { id: 30, title: "Bowl 30", price: 490, category: "Kitchen & Dining", img: BowlThirty },
  { id: 31, title: "Bowl 31", price: 500, category: "Kitchen & Dining", img: BowlThirtyone },
  { id: 32, title: "Bowl 32", price: 510, category: "Kitchen & Dining", img: BowlThirtyTwo },
  { id: 33, title: "Bowl 33", price: 520, category: "Kitchen & Dining", img: BowlThirtyThree },
  { id: 34, title: "Bowl 34", price: 530, category: "Kitchen & Dining", img: BowlThirtyFour },
  { id: 35, title: "Bowl 35", price: 540, category: "Kitchen & Dining", img: BowlThirtyFive },
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
