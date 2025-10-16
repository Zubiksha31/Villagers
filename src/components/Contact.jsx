// import React from "react";
// import FallingLeaf from "./FallingLeaf";


// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-emerald-50 pt-28 text-gray-900">
//       {[...Array(20)].map((_, i) => (
//         <FallingLeaf
//           key={i}
//           delay={Math.random() * 20}
//           size={0.8 + Math.random() * 1} // smaller leaves
//           left={`${Math.random() * 100}%`}
//         />
//       ))}
//       <div className="max-w-3xl mx-auto px-6 py-12 text-center">
//         <h1 className="text-3xl font-bold text-emerald-700 mb-4">Contact Us</h1>
//         <p className="text-gray-700 mb-8">
//           Have questions or want to collaborate with us? Reach out anytime!
//         </p>

//         <div className="bg-white shadow-md rounded-xl p-6">
//           <p className="text-gray-700">
//             📞 <b>Phone:</b> +91 9092117788
//           </p>
//           <p className="mt-2 text-gray-700">
//             📧 <b>Email:</b> Orders@villagersglobal.com
//           </p>
//           <p className="mt-2 text-gray-700">
//             📍 <b>Address:</b> Coimbatore, Tamil Nadu
//           </p>

//           <a
//             href="https://wa.me/919092117788"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-6 px-5 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import FallingLeaf from "./FallingLeaf";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-hidden pt-24">
      {/* Background Animated Shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-40"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-16 -right-10 w-48 h-48 bg-emerald-300 rounded-full opacity-30"
      ></motion.div>

      {/* Falling Leaves */}
      {[...Array(20)].map((_, i) => (
        <FallingLeaf
          key={i}
          delay={Math.random() * 20}
          size={0.6 + Math.random() * 1.2}
          left={`${Math.random() * 100}%`}
        />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6 sm:px-12 py-12 text-center relative z-10"
      >
        {/* Header */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-4"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 mb-10 sm:mb-12"
        >
          Have questions or want to collaborate with us? Reach out anytime!
        </motion.p>

        {/* Contact Card with 3D hover tilt */}
        <motion.div
          whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative bg-white shadow-2xl rounded-3xl p-8 sm:p-12 hover:shadow-3xl transition-shadow duration-500"
        >
          {/* Floating Accents */}
          <motion.div
            animate={{ rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-5 -left-5 w-12 h-12 bg-emerald-200 rounded-full opacity-50"
          ></motion.div>
          <motion.div
            animate={{ rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-5 w-16 h-16 bg-emerald-300 rounded-full opacity-40"
          ></motion.div>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-700 text-lg sm:text-xl"
          >
            📞 <b>Phone:</b> +91 9092117788
          </motion.p>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-4 text-gray-700 text-lg sm:text-xl"
          >
            📧 <b>Email:</b> Orders@villagersglobal.com
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-gray-700 text-lg sm:text-xl"
          >
            📍 <b>Address:</b> Koduvai, Tirupur district, Tamilnadu, India.
          </motion.p>

          {/* Animated WhatsApp Button */}
          <motion.a
            href="https://wa.me/919092117788"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 text-white font-medium rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
