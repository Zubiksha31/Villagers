import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900 pt-14 overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-emerald-700">Villagers</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Incorporated in <b>2017</b>, <b>Villagers</b> is an Indian
            <b> eco-friendly products</b> manufacturing company driven by a
            vision to bring sustainability into daily life. Our mission is to
            help people live better while preserving nature for the next
            generation by avoiding plastic.
          </p>

          <div className="mt-6 bg-emerald-100 p-4 rounded-xl shadow-sm border border-emerald-200">
            <h3 className="font-semibold text-emerald-700">🌿 Latest Offer!</h3>
            <p className="text-gray-700 mt-1">
              Get <b>15% OFF</b> on all bamboo and coconut shell products —
              Limited Time Offer!
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
            <a
              href="/materials"
              className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow-lg hover:bg-emerald-700 transition-all"
            >
              Explore Our Products
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80"
            alt="eco products"
            className="rounded-3xl w-full max-w-md shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </section>

      {/* --- ABOUT US --- */}
      <motion.section
        className="bg-white py-16 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-emerald-700 mb-6">About Us</h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
          We aim to achieve wellness in everyone’s life and preserve the
          environment through sustainable practices. Our mission is simple:
          <b> “To help people live better and sustain our planet.”</b>
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          Our founder, <b>Mr. E. Eswaramoorthy</b>, established Villagers with a
          vision — <i>“To make a difference to our routine life via sustainable
          sources.”</i>
        </p>
      </motion.section>

      {/* --- WHY VILLAGERS --- */}
      <motion.section
        className="py-16 bg-emerald-50 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-emerald-700 mb-6">
          Why Villagers?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Buying a single eco-friendly product might not change the world
          overnight, but it’s a powerful start 🌍. We believe in creating
          meaningful impact through small, conscious actions.
        </p>
        <p className="mt-4 text-gray-600">
          We can even <b>customize your order</b> and <b>print your logo or name</b> on
          the product. Because sustainability should also feel personal!
        </p>
      </motion.section>

      {/* --- VALUES & ACHIEVEMENTS --- */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div>
            <h3 className="text-3xl font-bold text-emerald-700 mb-4">
              Awards & Achievements 🏆
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                Proud winner of <b>South Indian Business Award (SIBA) 2019</b> for
                “Best Eco-Friendly Manufacturer in Tirupur.”
              </li>
              <li>
                Honored in various expos for excellence in sustainable product
                innovation.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-700 mb-4">
              Our Values 🌱
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We never compromise on quality. Every product is fully
              biodegradable, offering zero waste management and complete harmony
              with nature.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- SUSTAINABILITY SECTION --- */}
      <motion.section
        className="bg-emerald-100 py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-emerald-700 mb-4">
          Sustainable Design for a Better Tomorrow
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
          We believe in product designs that serve the environment, human health,
          and society without compromising quality or accessibility. Clean air,
          renewable resources, and a toxin-free planet are not luxuries — they’re
          necessities.
        </p>
        <p className="mt-6 font-semibold text-emerald-800">
          Join hands with us — <b>Villagers</b> — to enhance your health and
          support our planet 🌏
        </p>
      </motion.section>
    </div>
  );
};

export default Home;

