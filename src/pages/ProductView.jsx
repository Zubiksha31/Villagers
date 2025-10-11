
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// ✅ Product images from public folder
const Bowl = "/Bowlwithoutbase.png";
const Coffeecup = "/Coffeecup.png";
const Juicecup = "/Juicecup.png";
const Payasacup = "/PayasaCup.png";
const Bowlone = "/Bowl-one.jpg";
const Bowltwo = "/Bowl-two.jpg";
const Bowlthree = "/Bowl-three.jpg";
const Bowlwithbase = "/BowlwithBase.png";
const Candleholder = "/Candleholder.png";
const CoirBirdnest = "/Coir-BirdNest.png";
const Jar = "/Jar.png";
const Jumblebowl = "/Jumbobowl.png";
const Ladles = "/Ladles-two.png";
const Stick = "/Ladles.png";
const Penstand = "/PenStand.png";
const PlantHolder = "/PlantHolderimage.png";
const ServingLadles = "/Servingladles.png";
const ShellBirdfeeder = "/Shell-BirdFeeder.png";
const Soaptry = "/SoapTray.png";
const Soupbowl = "/SoupBowl.png";
const Wavystick = "/Wavystickladles.png";

// ✅ Product data
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
  { id: 21, title: "Serving Ladles", price: "₹300.00", img: ServingLadles },
];

// ✅ Example initial reviews
const productReviews = {
  1: [{ name: "Priya R.", comment: "Amazing product!", stars: 5 }],
  2: [{ name: "Arun K.", comment: "Love the coffee cup!", stars: 4 }],
  3: [{ name: "Meena S.", comment: "Nice and sturdy.", stars: 5 }],
};

const ProductView = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [reviews, setReviews] = useState(productReviews[id] || []);
  const [reviewerName, setReviewerName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
        Product Not Found
      </div>
    );
  }

  // ✅ Buy button - Opens WhatsApp with product details
  const handleBuy = () => {
    // Get the full product URL
    const productUrl = window.location.href;
    
    const message = `🌿 Hello! I'm interested in buying this product:

*${product.title}*
Price: ${product.price}

${productUrl}

Please share the product image and let me know about availability.`;

    window.open(
      `https://wa.me/919942210996?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // ✅ Share button - Shares unique product link
  const handleShare = () => {
    // Generate the unique product URL
    const productUrl = window.location.href;
    
    const shareMessage = `🌿 Check out this amazing eco-friendly product!

*${product.title}*
Price: ${product.price}

${productUrl}

Shop sustainable, live green! 🌱`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // ✅ Copy link functionality (bonus feature)
  const handleCopyLink = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl).then(() => {
      alert("Product link copied to clipboard!");
    });
  };

  // ✅ Add review
  const handleAddReview = () => {
    if (!reviewerName || !newReview || rating === 0) return;
    setReviews([...reviews, { name: reviewerName, comment: newReview, stars: rating }]);
    setReviewerName("");
    setNewReview("");
    setRating(0);
  };

  return (
    <div className="p-6 md:p-16 flex flex-col gap-10">
      {/* Product Image & Details */}
      <div className="flex flex-col md:flex-row gap-10 mt-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-w-[400px] object-contain rounded-lg bg-white p-4"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-4 mt-6">
          <h2 className="text-4xl font-semibold text-emerald-700">{product.title}</h2>
          <p className="text-2xl font-bold text-emerald-600">{product.price}</p>
          <p className="text-gray-600">
            Discover eco-friendly craftsmanship that blends sustainability with elegance. Each product is made from natural materials designed to enhance your green lifestyle.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleBuy} className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
              Buy Now
            </button>
            <button onClick={handleShare} className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              Share on WhatsApp
            </button>
            <button onClick={handleCopyLink} className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              Copy Link
            </button>
            <Link to="/materials" className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews 🌿</h3>
        <div className="space-y-4">
          {reviews.length === 0 && <p className="text-gray-600">No reviews yet. Be the first!</p>}
          {reviews.map((rev, index) => (
            <div key={index} className="bg-emerald-50 p-4 rounded-lg shadow-sm text-gray-700">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < rev.stars ? "text-amber-400" : "text-gray-300"}>★</span>
                ))}
              </div>
              <p className="font-semibold text-gray-800">{rev.name}</p>
              <p>{rev.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
          <input type="text" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} placeholder="Your name" className="flex-2 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          <input type="text" value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder="Write a review..." className="flex-2 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(star => (
              <span key={star} onClick={() => setRating(star)} className={`cursor-pointer text-2xl ${star <= rating ? "text-amber-400" : "text-gray-300"}`}>★</span>
            ))}
          </div>
          <button onClick={handleAddReview} className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">Post</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;