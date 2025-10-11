import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-emerald-50 pt-28 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-emerald-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-8">
          Have questions or want to collaborate with us? Reach out anytime!
        </p>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-700">
            📞 <b>Phone:</b> +91 9942210996
          </p>
          <p className="mt-2 text-gray-700">
            📧 <b>Email:</b> Orders@villagersglobal.com
          </p>
          <p className="mt-2 text-gray-700">
            📍 <b>Address:</b> Coimbatore, Tamil Nadu
          </p>

          <a
            href="https://wa.me/919942210996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
